import React from "react";
import { useTranslation } from 'react-i18next';

export const About = (props) => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6  ">
          
            <img src="img/about.png" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6 ">
            <div className="about-text">
              <h2> {t('about_title_about_we')} </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>{t('about_title_why_choose_us')}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
