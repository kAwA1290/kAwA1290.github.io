import React from 'react'
import Timeline from './Timeline'

const Career = () => {
	const Careers = [
	{
		id: "202210",
		time: "2022/10",
		title: "42Tokyo入学",
		belong:"個人",
		belongColor: "bg-blue-300",
		detail: "C言語でコンピュータを学んでいます。"
	},
	{
		id: "20229",
		time: "2022/9",
		title: "KOSEN Programming Contest",
		belong: "部活",
		belongColor: "bg-red-300",
		detail: "チームで、ReactNativeを使ってスマホアプリ「ARATAG」を開発しました。コロナ禍で満足に遊べない子どもたちに向けた、GPSを用いて離れた場所にいる人と外で遊べるアプリケーションです。"
	},
	{
		id: "20227",
		time: "2022/7",
		title: "42Tokyo受験",
		belong: "個人",
		belongColor: "bg-blue-300",
		detail: "親と同年代から高校生まで、幅広い年齢の人達と教え合いながら4週間のコーディング試験を受けました。"
	},
	{
		id: "20219",
		time: "2021/9",
		title: "Civictech Challenge Cup",
		belong: "部活",
		belongColor: "bg-red-300",
		detail: "チームで、Vue.jsを使ってレシートの情報から冷蔵庫内の食品を管理するアプリケーション「Pantry Manager」を開発しました。"
	}
	]
	return (
		<div className="flex flex-col items-center my-5">
			<div className="w-2/3 md:w-2/5 align-center">
				<p className="text-3xl text-stone-150 font-semibold mb-5 text-center">History</p>
				{
					Careers.map(item => (
						<Timeline key={item.id} time={item.time} title={item.title} belong={item.belong} belongColor={item.belongColor} detail={item.detail}/>
					))
				}
			</div>
		</div>
	)
}

export default Career;
