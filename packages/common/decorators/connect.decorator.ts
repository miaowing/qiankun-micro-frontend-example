import { connect } from "react-redux";

export function Connect<S extends any>(mapStateToProps?: (state: S) => any, mapDispatchToProps?: any): ClassDecorator {
    return (target) => {
        return connect(mapStateToProps, mapDispatchToProps)(target as any) as any;
    };
}
