import * as React from "react";
import spinner from "../../../style/images/spinner.gif";
class Spinner extends React.Component {
    render() {
        return (
                <div className="spinner">
                    <img src={spinner} alt="loading..." />
                    <p>در حال دریافت اطلاعات</p>
                </div>

        )
    }
}
export default Spinner;