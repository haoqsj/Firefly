import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "Firefly",

	// 个人签名
	bio: "Hello, I'm Firefly by sj.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qun.qq.com/universal-share/share?ac=1&authKey=dyRjpjTiU061tdXwwTMB2ACCyOvYxJTIbaitPkex5%2F%2BpNIlVl2TF%2FR3bOJjWrxog&busi_data=eyJncm91cENvZGUiOiI1Mjk2NDkxODQiLCJ0b2tlbiI6IkJoQ1ptODhoaDM1eVVNMmd3dnJzV3VHK3llVGdybDZJQS9CdWt4OXJPeWJKa2N6RmVXNktJajdpZVlkZDdkWlMiLCJ1aW4iOiIyNjM1MjM3OTQ5In0%3D&data=jW8gfSPDBoWwKzBsECSNEc2zbH9h8DovpBMnYFi0r_SyhQgL2KjTx39rpn-DeeGPekY2syOwgpU8T-vAZtVkKw&svctype=4&tempid=h5_group_info",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/haoqsj",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:qiu.sj@outlook.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
