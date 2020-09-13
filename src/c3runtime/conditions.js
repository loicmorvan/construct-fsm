"use strict";

/*
bool C3.compare(a,cmp,b);
--------------
cmp value list
--------------
0 = equals
1 = not equals
2 = less
3 = less/equals
4 = greater
5 = greater/equal
*/

{
	C3.Behaviors.aaXe_FSM.Cnds =
	{
		OnEnter(name) {
			return C3.compare(this.currentState, 0, name);
		},

		OnExit(name) {
			return C3.compare(this.previousState, 0, name);
		},

		OnStateChanged(){
			return true;
		},

		IsCurState(name){
			return C3.compare(this.currentState, 0, name);
		},

		IsPreState(name){
			return C3.compare(this.previousState, 0, name);
		},

		IsLastTransition(name) {
			return C3.compare(this.lastTransition, 0, name);
		}
	};
}