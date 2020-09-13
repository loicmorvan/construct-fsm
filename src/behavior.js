"use strict";

{
	////////////////////////////////////////////
	// The behavior ID is how Construct identifies different kinds of behaviors.
	// *** NEVER CHANGE THE BEHAVIOR ID! ***
	// If you change the behavior ID after releasing the behavior, Construct will think it is an entirely different
	// behavior and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE BEHAVIOR.
	// Only the behavior name is displayed in the editor, so to rename your behavior change the name but NOT the ID.
	// If you want to completely replace a behavior, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new behavior with a different behavior ID.
	const BEHAVIOR_ID = "aaXe_FSM";
	////////////////////////////////////////////
	
	const BEHAVIOR_VERSION = "1.2.0.0";
	const BEHAVIOR_CATEGORY = "general";
	
	const BEHAVIOR_CLASS = SDK.Behaviors.aaXe_FSM = class FSMBehavior extends SDK.IBehaviorBase
	{
		constructor()
		{
			super(BEHAVIOR_ID);
			
			SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(BEHAVIOR_VERSION);
			this._info.SetCategory(BEHAVIOR_CATEGORY);
			this._info.SetAuthor("Loïc Morvan, piranha305");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsOnlyOneAllowed(false);
			
			// Support both C2 and C3 runtimes
			this._info.SetSupportedRuntimes(["c3"]);
			
			SDK.Lang.PushContext(".properties");
			
			this._info.SetProperties([
				new SDK.PluginProperty("check", "active", true),
				new SDK.PluginProperty("text", "start-state", "Off")
			]);
			
			SDK.Lang.PopContext();	// .properties
			
			SDK.Lang.PopContext();
		}
	};
	
	BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}