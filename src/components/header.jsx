import React from "react";
import { getContactUsAction } from "../util/configuration";
import { useTranslation } from 'react-i18next';

export const Header = (props) => {
  const { t } = useTranslation();
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href={getContactUsAction}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t('contactUsButtonText')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
