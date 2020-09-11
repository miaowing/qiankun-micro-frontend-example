import { connect } from "react-redux";

export function Connect(mapStateToProps?: any, mapDispatchToProps?: any): ClassDecorator {
    return (target) => {
        return connect(mapStateToProps, mapDispatchToProps)(target as any) as any;
    };
}
