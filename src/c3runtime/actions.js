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

			this.lastTransition = "";
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
		},

		Transition(transitionName) {
			if (this.transitions != null &&
				this.transitions[this.currentState] != undefined) {
					var toState = this.transitions[this.currentState][transitionName];

					if (toState != undefined) {
						this.lastTransition = transitionName;
						this.previousState = this.currentState;
						this.currentState = toState;

						this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnStateChanged);
						this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnEnter);
						this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnExit);
					}
			}
		}
	};
}