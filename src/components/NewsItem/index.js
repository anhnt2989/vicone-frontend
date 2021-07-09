import React, { memo } from 'react';
import { Row, Col } from 'reactstrap';
import clsx from 'clsx';
// import parse from 'html-react-parser';
import dayjs from 'dayjs';
import LinesEllipsis from 'react-lines-ellipsis';
import { useHistory } from 'react-router';

import appConfig from 'constants/appConfig';
import Routes from 'constants/routes';
import Wrapper from './Wrapper';

function NewsItem(props) {
  const history = useHistory();
  const { logo, slug, created_at, updated_at, title, summary, isStuck, content } = props;
  return (
    <Wrapper>
      <Row>
        <Col xs={12} md={6}>
          <div className="img-block">
            <img className="img" src={`${appConfig.BASE_URL}${logo}`} alt={slug} />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="text-block">
            <p className={clsx("date", isStuck && "stuck")}>{created_at && dayjs(created_at).format('DD/MM/YYYY')}</p>
            <h5 className={clsx("title", isStuck && "stuck")} onClick={() => history.push({ pathname: `${Routes.NEWS}/${slug}`, state: {current: {logo, created_at, updated_at, title, content, slug}}  })}>{title && title}</h5>
            {isStuck && 
              <div className={clsx("text", isStuck && "stuck")}>
                { summary && 
                  <LinesEllipsis
                    text={summary}
                    maxLine={4}
                    ellipsis="..."
                    basedOn="words"
                  />
                }
              </div>
            }
          </div>
        </Col>
      </Row>
      
    </Wrapper>
  );
};

export default memo(NewsItem);