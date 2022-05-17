import create from 'zustand';

const myStore = create(set => ({
	count: 0,

	increaseCount: state => {
		set(state => {
			// console.log(`prevCnt = ${state.count}`);
			return { count: state.count + 1 };
		}); // set method로 상태 변경 가능
	},

	setCnt: input => {
		set({ count: input });
	},

	clearCnt: () => {
		set(state => ({ count: 0 }));
	},
}));

export default myStore;
