import React from 'react'
import { useTranslation} from 'react-i18next';

function MapCard({infos}) {
    const { t } = useTranslation();
  return (
    <div className="card p-4 " >
                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top rounded-3 " alt="..."/>
                <div className="card-body text-start d-flex flex-column  row-gap-2">
                    <h5 className="card-title h6 fw-medium"><i className="bi bi-calendar-range me-2"></i> {t('date_range')}</h5>
                    <p className="card-text h5 fw-bolder  ">{infos.start_date}<i className="bi bi-arrow-right">{infos.end_date}</i></p>

                    <h5 className="card-title h6 fw-medium"><i className="bi bi-flag me-2"></i>{t('depart')}</h5>
                    <p className="card-text h5 fw-bolder ">{infos.departure}</p>

                    <h5 className="card-title h6 fw-medium"><i className="bi bi-flag-fill me-2"></i>{t('arrival')}</h5>
                    <p className="card-text h5 fw-bolder ">{infos.arrival}</p>

                    <h5 className="card-title h6 fw-medium">Distance</h5>
                    <p className="card-text h5 fw-bolder ">{infos.distance}km</p>
                </div>
            </div>
  )
}

export default MapCard