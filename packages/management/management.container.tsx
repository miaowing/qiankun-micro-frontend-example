import * as React from "react";
import { State } from "./interfaces/state.interface";
import { Connect } from "../common/decorators/connect.decorator";
import { bindActionCreators } from "../common/bind-action-creators";
import { UserAction } from "./redux/user.action";
import { Intl } from '../common/decorators/intl.decorator';
import { IntlProps } from "../common/interfaces/intl-props.interface";

interface ManagementContainerProps extends IntlProps {
    username?: string;
    actions?: {
        user: typeof UserAction;
    }
}

@Connect<State>(
    state => ({
        username: state.user.name,
    }),
    dispatch => ({
        actions: {
            user: bindActionCreators(UserAction, dispatch),
        }
    })
)
@Intl('management')
export class ManagementContainer extends React.Component<ManagementContainerProps, any> {
    componentDidMount() {
        this.props.actions?.user.getUser();
    }

    render() {
        const { username, language, intl, switchLanguage } = this.props;
        return <>
            {intl.get('title')}: {username}
            <a onClick={() => switchLanguage()}>{language}</a>
        </>;
    }
}
