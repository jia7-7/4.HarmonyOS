import ToDoItem from '../view/ToDoItem';

@Entry
@Component
struct ToDoListPage {
  @State totalTasks: string[] = [];
  @State isShowDialog: boolean = false;
  @State newTask: string = '';
  aboutToAppear() {
    this.totalTasks =['早起校园跑','院楼打扫','写鸿蒙程序','参加openlab复试','足球院队训练'];
  }
  addNewTask() {
    if (this.newTask.trim() !== '') {
      this.totalTasks.push(this.newTask);
      this.newTask = '';
      this.isShowDialog = false;
    }
  }
  cancelAdd() {
    this.newTask = '';
    this.isShowDialog = false;
  }
  build() {
    Column({ space:20}) {
      Text('待办')
        .fontSize(28)
        .fontWeight(FontWeight.Bold)
        .lineHeight(33)
        .width('100%')
        .margin({
          top: 24,
          bottom: 12,
          left:55
        })
        .textAlign(TextAlign.Start)

      ForEach(this.totalTasks, (item: string) => {
        ToDoItem({ content: item })
      })
      Row() {
        Button('+')
          .fontSize(32)
          .fontWeight(FontWeight.Bold)
          .width(60)
          .height(60)
          .backgroundColor(0x007DFF)
          .borderRadius(30)
          .onClick(() => {
            this.isShowDialog = true;
          })
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
      .margin({ bottom: 30 })

      if (this.isShowDialog) {
        // 半透明背景
        Row() {
          // 对话框内容
          Column({ space: 20 }) {
            Text('添加新待办')
              .fontSize(22)
              .fontWeight(FontWeight.Bold)
              .width('100%')
              .textAlign(TextAlign.Center)

            TextInput({ placeholder: '请输入待办事项', text: this.newTask })
              .type(InputType.Normal)
              .width('100%')
              .height(50)
              .padding(10)
              .backgroundColor(Color.White)
              .borderRadius(8)
              .onChange((value: string) => {
                this.newTask = value;
              })

            Row({ space: 20 }) {
              Button('取消')
                .fontSize(18)
                .width(120)
                .height(40)
                .backgroundColor(0xCCCCCC)
                .borderRadius(20)
                .onClick(() => {
                  this.cancelAdd();
                })

              Button('确定')
                .fontSize(18)
                .width(120)
                .height(40)
                .backgroundColor(0x007DFF)
                .borderRadius(20)
                .onClick(() => {
                  this.addNewTask();
                })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceEvenly)
          }
          .width('80%')
          .padding(20)
          .backgroundColor(Color.White)
          .borderRadius(16)
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .backgroundColor(0x99000000) // 半透明黑色背景
        .position({ x: 0, y: 0 })
        .zIndex(999) // 确保在最上层
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(0xF1F3F5)


  }
}