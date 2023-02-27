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
		detail: "C言語標準関数の再実装を通して学んでいます。正規の関数と完全に等しい動作を追い求める中で、コンパイラによる最適化や、コーナーケース、メモリーの扱いに詳しくなりました。"
	},
	{
		id: "20229",
		time: "2022/9",
		title: "KOSEN Programming Contest",
		belong: "部活動",
		belongColor: "bg-red-300",
		detail: "ReactNativeを用いて、チームでスマホアプリ「ARATAG」を開発しました。コロナ禍で満足に遊べない子どもたちに向けた、GPSを用いて離れた場所にいる人とでも近くにいるように遊べるアプリケーションです。"
	},
	{
		id: "20227",
		time: "2022/7",
		title: "42Tokyo受験",
		belong: "個人",
		belongColor: "bg-blue-300",
		detail: "初めて出会った人達と教え合いながら、4週間のコーディング試験を受けました。"
	},
	{
		id: "20219",
		time: "2021/9",
		title: "Civictech Challenge Cup",
		belong: "部活動",
		belongColor: "bg-red-300",
		detail: "Vue.jsを用いて、チームで開発しました。レシートの情報から冷蔵庫内の食品を管理するアプリケーション「Pantry Manager」を開発しました。"
	}
	]
	return (
		<div className="flex flex-col items-center my-5">
			<p className="text-3xl text-stone-150 font-semibold mb-5">History</p>
			{
				Careers.map(item => (
					<Timeline key={item.id} time={item.time} title={item.title} belong={item.belong} belongColor={item.belongColor} detail={item.detail}/>
				))
			}
		</div>
	)
}
export default Career;
