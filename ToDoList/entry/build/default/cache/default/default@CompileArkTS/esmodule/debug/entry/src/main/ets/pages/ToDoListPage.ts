if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToDoListPage_Params {
    totalTasks?: string[];
}
import ToDoItem from "@normalized:N&&&entry/src/main/ets/view/ToDoItem&";
class ToDoListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.totalTasks = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToDoListPage_Params) {
        if (params.totalTasks !== undefined) {
            this.totalTasks = params.totalTasks;
        }
    }
    updateStateVars(params: ToDoListPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private totalTasks: string[];
    aboutToAppear() {
        this.totalTasks = ['早起校园跑', '学习高数', '背英语单词', '写鸿蒙程序', '参加openlab复试', '足球院队训练'];
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(0xF1F3F5);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('待办');
            Text.fontSize(28);
            Text.fontWeight(FontWeight.Bold);
            Text.lineHeight(33);
            Text.width('100%');
            Text.margin({
                top: 24,
                bottom: 12,
                left: 55
            });
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ToDoItem(this, { content: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/ToDoListPage.ets", line: 25, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    content: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ToDoItem" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.totalTasks, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ToDoListPage";
    }
}
registerNamedRoute(() => new ToDoListPage(undefined, {}), "", { bundleName: "org.openlab.myapplicationtodolist", moduleName: "entry", pagePath: "pages/ToDoListPage", pageFullPath: "entry/src/main/ets/pages/ToDoListPage", integratedHsp: "false", moduleType: "followWithHap" });
