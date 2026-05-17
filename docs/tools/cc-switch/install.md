# CC Switch 安装

这一页只讲安装。先把 CC Switch 安装好，再回到 [CC Switch 总览](/tools/cc-switch/) 添加 Arqel Provider。

## 下载入口

- 官网：[https://ccswitch.io](https://ccswitch.io)
- GitHub：[https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)
- GitHub Releases：[https://github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases)
- Latest Release：[https://github.com/farion1231/cc-switch/releases/latest](https://github.com/farion1231/cc-switch/releases/latest)
- User Manual：[https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md)

## 系统要求

根据 README 信息，CC Switch 面向这些系统：

- Windows 10+
- macOS 12 Monterey+
- Linux 主流发行版，README 提到 Ubuntu 22.04+、Debian 11+、Fedora 34+

## macOS

推荐方式一：Homebrew。

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

升级：

```bash
brew upgrade --cask cc-switch
```

推荐方式二：下载 `.dmg`。

1. 打开 Releases 页面。
2. 找到最新版。
3. 下载 `CC-Switch-v{version}-macOS.dmg`。
4. 双击打开，把 CC Switch 拖入 Applications。
5. 从启动台或应用程序目录打开。

## Windows

推荐下载 `.msi` 安装包。

1. 打开 Releases 页面。
2. 找到最新版。
3. 下载 `CC-Switch-v{version}-Windows.msi`。
4. 双击安装。
5. 从开始菜单打开 CC Switch。

如果你不想安装，也可以下载 `CC-Switch-v{version}-Windows-Portable.zip`，但新手推荐 `.msi`。

## Linux

根据发行版选择：

- Debian / Ubuntu：下载 `.deb`。
- Fedora / RHEL / openSUSE：下载 `.rpm`。
- 不确定发行版：可以尝试 `.AppImage`。
- Arch：README 提到可用 `paru -S cc-switch-bin`。

Ubuntu / Debian 示例：

```bash
sudo apt install ./CC-Switch-v版本号-Linux.deb
```

如果使用 AppImage：

```bash
chmod +x CC-Switch-v版本号-Linux.AppImage
./CC-Switch-v版本号-Linux.AppImage
```

Arch 示例：

```bash
paru -S cc-switch-bin
```
