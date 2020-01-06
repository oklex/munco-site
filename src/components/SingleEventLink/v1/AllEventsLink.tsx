import React from "react";
import LinkStyle from "../../../models/LinkStyle";
import { Link } from "react-router-dom";

interface IAllEventsLinkProps {
  linkStyle: LinkStyle;
}

class AllEventsLink extends React.Component<IAllEventsLinkProps, {}> {
  render() {
    var styling: string = "";
    if (this.props.linkStyle === LinkStyle.horizontal) styling = "col-lg-6";
    if (this.props.linkStyle === LinkStyle.vertical) styling = "more-margin";
    return (
      <div className={styling}>
        <Link to='/calendar'>
          <div className="event-info AllEventsLink">
            <h4 className='blueText'>See all conferences</h4>
            <div>
              <p>
                a curated list for the lower mainland
              </p>
            </div>
          </div>
          </Link>
      </div>
    );
  }
}

export default AllEventsLink