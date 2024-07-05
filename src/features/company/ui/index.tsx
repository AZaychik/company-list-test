import React, { useCallback, useEffect, useRef } from "react";
import { CompanyRow } from "./CompanyRow";
import { CompanyHeader } from "./CompanyHeader";

import { useAppDispatch, useAppSelector, useIntersectionObserver } from "@shared/lib/hooks";
import { fetchedCompanies, selectCompanies } from "@entities/company/model";

import "./styles.css";
import { selectHasNextPageOfCompany, selectIsCompanyLoading } from "@entities/company/model/selectors";
import { MAX_COUNT_COMPANY_PER_PAGE } from "@pages/main-page/ui/page";

export const CompanyTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const lastUserRef = useRef<HTMLTableRowElement | null>(null);
  const ioEntry = useIntersectionObserver(lastUserRef, {});

  const isLoading = useAppSelector(selectIsCompanyLoading);
  const companies = useAppSelector(selectCompanies);
  const hasNext = useAppSelector(selectHasNextPageOfCompany);

  const lastCompany = companies[companies.length - 1] || null;

  const handleLoadMore = useCallback(() => {
    dispatch(
      fetchedCompanies({
        countOfEntities: MAX_COUNT_COMPANY_PER_PAGE,
        lastVisibleEntity: lastCompany,
      })
    );
  }, [lastCompany]);

  useEffect(() => {
    if (!isLoading) {
      if (hasNext) {
        if (ioEntry?.isIntersecting) {
          handleLoadMore();
        }
      }
    }
  }, [handleLoadMore, hasNext, ioEntry, isLoading]);

  return (
    <table className="company-table">
      <CompanyHeader />
      <tbody>
        {companies.map(company => (
          <CompanyRow key={company.id} company={company} />
        ))}
        {hasNext ? <tr className="company-row" ref={lastUserRef}></tr> : null}
      </tbody>
    </table>
  );
};
