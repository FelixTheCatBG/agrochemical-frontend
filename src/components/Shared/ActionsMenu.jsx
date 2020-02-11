import React, {
    Component
} from 'react';
import '../../styles/ActionsMenu.scss';

class ActionsMenu extends Component {
    render () {
        return (
            <div className={`ActionsMenuPaper ${this.props.parent}`}>{this.props.children.length > 1 ? this.props.children.map(e => e) : this.props.children}</div>
        );
    }
}
export default (ActionsMenu);