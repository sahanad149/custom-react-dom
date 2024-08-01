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
    ) {
        // console.log(type, props);
        let el = document.createElement(type);
        if (props.className) el.className = props.className;
        if (props.src) el.src = props.src;
        ['alt', 'className', 'href', 'rel', 'src', 'target'].forEach(k => {
            if (props[k]) el[k] = props[k];
        });

        if(props.onClick) {
            el.addEventListner('click', props.onClick);
        }

        if (props.bgColor) {
            el.style.backgroundColor = props.bgColor;
        }

        return el;
    },

    createTextInstance(
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle,
    ) {
        // <div>Click Here <button/></div>
        return document.createTextNode(text);
    },

    appendChildToContainer(container, child) {
        container.appendChild(child);
    },
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },

    removeChildFromContainer(container, child){
        container.removeChild(child);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },
    insertInContainerBefore(container, child, before) {
        container.insertBefore(child, before);
    },
    insertBefore(parent, child, before) {
        parent.insertBefore(child, before);
    },

    prepareUpdate(
        instance, 
        type,
        oldProps,
        newProps,
        rootContainerInstance,
        currentHostContext,
    ) {
        let payload;
        if (oldProps.bgColor !== newProps.bgColor) {
            payload = {newBgColor: newProps.bgColor};
        }
        return payload;
    },

    commitUpdate(
        instance,
        updatePayload,
        type,
        oldProps,
        newProps,
        finishedWork,
    ) {
        if (updatePayload.newBgColor) {
            instance.style.backgroundColor = updatePayload.newBgColor
        }
    },

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