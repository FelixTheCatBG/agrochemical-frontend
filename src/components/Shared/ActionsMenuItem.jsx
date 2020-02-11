import React, {
    Component
} from 'react';
import '../../styles/ActionsMenu.scss';

class ActionsMenuItem extends Component {
    render () {
        return (
            <div onMouseOut={this.props.mouseOutEvent} className="ActionsMenuItem" onClick={this.props.action} onTouchStart={this.props.action} data-index={this.props.dataIndex}>{this.props.actionName}</div>
        );
    }
}
export default (ActionsMenuItem);