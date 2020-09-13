"use strict";

{
	C3.Behaviors.aaXe_FSM.Acts =
	{
		SetActivated(value)
		{
			this.activated = (value == 1);
		},

		GoToState(state){
			if(!this.activated) return;
			if(state == null) return;

			this.previousState = this.currentState;
			this.currentState = state;

			this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnStateChanged);
			this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnEnter);
			this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnExit);
		},

		AddTransition(transitionName, fromState, toState) {
			if (this.transitions == null) {
			 this.transitions = [];
			}

			if (this.transitions[fromState] == undefined) {
			 this.transitions[fromState] = [];
			}
			
			this.transitions[fromState][transitionName] = toState;
		}
	};
}