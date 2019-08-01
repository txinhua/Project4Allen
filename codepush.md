

###install

```npm install -g code-push-cli```



## account



###  register

``` code-push register ```

tips 网页登录成功后拷贝token

### login

``` code-push login ```

### logout

```code-push loout```

### list loged tokens

``` code-push access-key ls ```

### remove access-key

``` code-push access-key rm <accessKey> ```



## APP

### add iOS app

``` code-push app add <name> iOS react-native ```

### add Android App

``` code-push app add <name> Android react-native ```

### list apps

``code-push app list ``

### remove app

``` code-push app remove <name> ```

### rename app

``` code-push app rename <name> ```



## project integrate

###  step1

``` npm install react-native-code-push —save ```

### step2

``` react-native link react-native-code-push```

### step3

``` import CodePush from "react-native-code-push"; // 引入code-push
let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency : CodePush.CheckFrequency.ON_APP_RESUME
};

class App extends Component<Props> {

  //如果有更新的提示
  syncImmediate() {
    CodePush.sync( {
          //安装模式
          //ON_NEXT_RESUME 下次恢复到前台时
          //ON_NEXT_RESTART 下一次重启时
          //IMMEDIATE 马上更新
          installMode : CodePush.InstallMode.IMMEDIATE ,
          //对话框
          updateDialog : {
            //是否显示更新描述
            appendReleaseDescription : true ,
            //更新描述的前缀。 默认为"Description"
            descriptionPrefix : "更新内容：" ,
            //强制更新按钮文字，默认为continue
            mandatoryContinueButtonLabel : "立即更新" ,
            //强制更新时的信息. 默认为"An update is available that must be installed."
            mandatoryUpdateMessage : "必须更新后才能使用" ,
            //非强制更新时，按钮文字,默认为"ignore"
            optionalIgnoreButtonLabel : '稍后' ,
            //非强制更新时，确认按钮文字. 默认为"Install"
            optionalInstallButtonLabel : '后台更新' ,
            //非强制更新时，检查到更新的消息文本
            optionalUpdateMessage : '有新版本了，是否更新？' ,
            //Alert窗口的标题
            title : '更新提示'
          } ,
        } ,
    );
  }

  componentWillMount() {
    CodePush.disallowRestart();//禁止重启
    this.syncImmediate(); //开始检查更新
  }

  componentDidMount() {
    CodePush.allowRestart();//在加载完了，允许重启
  }

}

// 这一行必须要写
App = CodePush(codePushOptions)(App)
```

add this code to your app.js

### step4

bundle you project for android and iOS 

### step5

push your jsbundle to code push

```code-push release-react <appName> <platform> [options] ```

``` code-push release-react
选项：
  --bundleName, -b           Name of the generated JS bundle file. If unspecified, the standard bundle name will be used, depending on the specified platform: "main.jsbundle" (iOS), "index.android.bundle" (Android) or "index.windows.bundle" (Windows)  [字符串] [默认值: null]
  --deploymentName, -d       Deployment to release the update to  [字符串] [默认值: "Staging"]
  --description, --des       Description of the changes made to the app with this release  [字符串] [默认值: null]
  --development, --dev       Specifies whether to generate a dev or release build  [布尔] [默认值: false]
  --disabled, -x             Specifies whether this release should be immediately downloadable  [布尔] [默认值: false]
  --entryFile, -e            Path to the app's entry Javascript file. If omitted, "index.<platform>.js" and then "index.js" will be used (if they exist)  [字符串] [默认值: null]
  --gradleFile, -g           Path to the gradle file which specifies the binary version you want to target this release at (android only).  [默认值: null]
  --mandatory, -m            Specifies whether this release should be considered mandatory  [布尔] [默认值: false]
  --noDuplicateReleaseError  When this flag is set, releasing a package that is identical to the latest release will produce a warning instead of an error  [布尔] [默认值: false]
  --plistFile, -p            Path to the plist file which specifies the binary version you want to target this release at (iOS only).  [默认值: null]
  --plistFilePrefix, --pre   Prefix to append to the file name when attempting to find your app's Info.plist file (iOS only).  [默认值: null]
  --rollout, -r              Percentage of users this release should be immediately available to  [字符串] [默认值: "100%"]
  --privateKeyPath, -k       Specifies the location of a RSA private key to sign the release with  [字符串] [默认值: false]
  --sourcemapOutput, -s      Path to where the sourcemap for the resulting bundle should be written. If omitted, a sourcemap will not be generated.  [字符串] [默认值: null]
  --targetBinaryVersion, -t  Semver expression that specifies the binary app version(s) this release is targeting (e.g. 1.1.0, ~1.2.3). If omitted, the release will target the exact version specified in the "Info.plist" (iOS), "build.gradle" (Android) or "Package.appxmanifest" (Windows) files.  [字符串] [默认值: null]
  --outputDir, -o            Path to where the bundle and sourcemap should be written. If omitted, a bundle and sourcemap will not be written.  [字符串] [默认值: null]
  --config, -c               Path to the React Native CLI configuration file  [字符串] [默认值: null]
  -v, --version              显示版本号  [布尔]
```

-t 后面传的值需要根据本次更新覆盖的App版本作如下rang的取值

| rang          | 含义                                      | 例子                                    |
| ------------- | ----------------------------------------- | --------------------------------------- |
| ^2.2.1        | 指定的 MAJOR 版本号下, 所有更新的版本     | 匹配 2.2.3, 2.3.0; 不匹配 1.0.3, 3.0.1  |
| ~2.2.1        | 指定 MAJOR.MINOR 版本号下，所有更新的版本 | 匹配 2.2.3, 2.2.9 ; 不匹配 2.3.0, 2.4.5 |
| >=2.1         | 版本号大于或等于 2.1.0                    | 匹配 2.1.2, 3.1                         |
| <=2.2         | 版本号小于或等于 2.2                      | 匹配 1.0.0, 2.2.1, 2.2.11               |
| 1.0.0 - 2.0.0 | 版本号从 1.0.0 (含) 到 2.0.0 (含)         | 匹配 1.0.0, 1.3.4, 2.0.0                |





