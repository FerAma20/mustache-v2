import React from "react";
import { getContactUsAction } from "../util/configuration";
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

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
                <Button href={getContactUsAction}>{t('contactUsButtonText')}</Button>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
