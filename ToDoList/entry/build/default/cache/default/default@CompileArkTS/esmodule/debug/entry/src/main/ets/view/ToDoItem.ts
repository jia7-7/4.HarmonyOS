if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToDoItem_Params {
    content?: string;
    isComplete?: boolean;
}
export default class ToDoItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.content = undefined;
        this.__isComplete = new ObservedPropertySimplePU(false, this, "isComplete");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToDoItem_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.isComplete !== undefined) {
            this.isComplete = params.isComplete;
        }
    }
    updateStateVars(params: ToDoItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isComplete.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isComplete.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    public content?: string;
    private __isComplete: ObservedPropertySimplePU<boolean>;
    get isComplete() {
        return this.__isComplete.get();
    }
    set isComplete(newValue: boolean) {
        this.__isComplete.set(newValue);
    }
    labelIcon(icon: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(icon);
            Image.objectFit(ImageFit.Contain);
            Image.width(28);
            Image.height(28);
            Image.margin(28);
        }, Image);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.borderRadius(24);
            Row.backgroundColor(Color.White);
            Row.width('93.3%');
            Row.height(64);
            Row.onClick(() => {
                this.isComplete = !this.isComplete;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isComplete) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.labelIcon.bind(this)({ "id": 16777228, "type": 20000, params: [], "bundleName": "org.openlab.myapplicationtodolist", "moduleName": "entry" });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.labelIcon.bind(this)({ "id": 16777226, "type": 20000, params: [], "bundleName": "org.openlab.myapplicationtodolist", "moduleName": "entry" });
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.content);
            Text.fontSize(20);
            Text.fontWeight(500);
            Text.opacity(this.isComplete ? 0.4 : 1);
            Text.decoration({ type: this.isComplete ? TextDecorationType.LineThrough : TextDecorationType.None });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
