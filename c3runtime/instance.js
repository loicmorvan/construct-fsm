"use strict";

{
	C3.Behaviors.aaXe_FSM.Instance = class MyBehaviorInstance extends C3.SDKBehaviorInstanceBase
	{
		constructor(behInst, properties)
		{
			super(behInst);
			
			this.activated = true;
			this.startState = "Off";
			
			if (properties)
			{
				this.activated = properties[0];
				this.startState = properties[1];
				this.startState = (this.startState != "" || this.startState != null) ? this.startState : "Off";
			}

			this.currentState = this.startState;
			this.previousState = this.startState;
			
			//this.Trigger(C3.Behaviors.aaXe_FSM.Cnds.OnEnter);
		}

		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				"activated" : this.activated,
				"previousState" : this.previousState,
				"currentState" : this.currentState
			};
		}

		LoadFromJson(o)
		{
			this.activated = o["activated"];
			this.previousState = o["previousState"];
			this.currentState = o["currentState"];
		}
	};
}