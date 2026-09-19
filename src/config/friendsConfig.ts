import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "吴暝uo",
		imgurl:
			"https://i1.hdslb.com/bfs/face/ab325e4a4a864db653543eed1068ddd0886a5681.jpg",
		desc: "~",
		siteurl: "https://space.bilibili.com/1876241773",
		tags: ["bilibili"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "一只小萌新2147483647",
		imgurl: "https://i2.hdslb.com/bfs/face/d060218d70c4387d9f8f3f56891a5eb6ba57a302.jpg",
		desc: "一只小萌新qwq",
		siteurl: "https://space.bilibili.com/3546574047152312",
		tags: ["bilibili"],
		weight: 9,
		enabled: true,
	},
	{
		title: "期渔",
		imgurl: "https://i0.hdslb.com/bfs/face/9c2927dcf01c2d96a23ad7c4d94f7af17905103e.jpg",
		desc: "已急哭",
		siteurl: "https://space.bilibili.com/3493122164132550",
		tags: ["bilibili"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
