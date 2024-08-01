import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
    // configuration for how to talk to the host env or host config
    supportsMutation: true,

    createInstance(
        type,
        props,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle,
    ) {},

    createTextInstance(
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle,
    ) {},

    // appendChildToContainer(container, child) {},
    // appendChild(parent, child) {},
    // appendInitialChild(parent, child) {},

    // removeChildFromContainer(container, child){},
    // removeChild(parent, child) {},
    // insertInContainerBefore(container, child, before) {},
    // insertBefore(parent, child, before) {},

    prepareUpdate(
        instance, 
        type,
        oldProps,
        newProps,
        rootContainerInstance,
        currentHostContext,
    ) {},

    commitUpdate(
        instance,
        updatePayload,
        type,
        oldProps,
        newProps,
        finishedWork,
    ) {},

    finalizeInitialChildren() {},
    getChildHostContext() {},
    getPublicInstance() {},
    getRootHostContext() {},
    prepareForCommit() {},
    resetAfterCommit() {},
    shouldSetTextContent() {
        return false;
    },
});

let NewDOM = {
    render(whatToRender, div) {
        let container = reconciler.createContainer(div, false, false);
        reconciler.updateContainer(whatToRender, container, null, null);
    },
};

export default NewDOM;