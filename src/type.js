"use strict";

{
	const BEHAVIOR_CLASS = SDK.Behaviors.aaXe_FSM;
	
	 BEHAVIOR_CLASS.Type = class FSMType extends SDK.IBehaviorTypeBase
	{
		constructor(sdkPlugin, iBehaviorType)
		{
			super(sdkPlugin, iBehaviorType);
		}
	};
}