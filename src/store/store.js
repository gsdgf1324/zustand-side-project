import create from 'zustand';
import { devtools } from 'zustand/middleware';

// const useStore = create(
// 	devtools(set => ({
// 		count: 0,

// 		increaseCount: state => {
// 			set(state => {
// 				return { count: state.count + 1 };
// 			});
// 		},
// 	})),
// );

// export default useStore;

const myStore = set => ({
	count: 0,

	increaseCount: state => {
		set(state => {
			return { count: state.count + 1 };
		});
	},

	setCnt: input => {
		set({ count: input });
	},

	clearCnt: () => {
		set(state => ({ count: 0 }));
	},
});

const useStore = create(devtools(myStore));

export default useStore;

/*

setCnt: input => {
	set({ count: input });
},

clearCnt: () => {
	set(state => ({ count: 0 }));
},

*/
