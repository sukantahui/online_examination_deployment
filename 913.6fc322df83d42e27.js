"use strict";(self.webpackChunkcoder_tutorial=self.webpackChunkcoder_tutorial||[]).push([[913],{8913:(J,C,r)=>{r.r(C),r.d(C,{BijoyaRegistrationModule:()=>V});var T=r(6895),b=r(6264),a=r(4006),i=r(4650),E=r(4927),w=r(262),S=r(8505),M=r(529),u=r(2843);let F=(()=>{var n;class s{constructor(){}serverError(e){return e instanceof Response?(0,u._)("backend server error"):(0,u._)(0===e.status?{status:e.status,message:"Backend Server is not Working",statusText:e.statusText}:401===e.status?{status:e.status,message:"Your are not authorised",statusText:e.statusText}:500===e.status?{status:e.status,message:"Data saving error",statusText:e.statusText}:406===e.status?e.error.message?{status:e.status,message:e.error.message,statusText:e.statusText}:{status:e.status,message:"Duplicate entry",statusText:e.statusText}:422===e.status?{status:e.status,message:e.error.message,statusText:e.statusText}:e)}handleError(e){return e.error.message.includes("1062")?(0,u._)("Record already exists"):(0,u._)(e.error.message)}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})(),H=(()=>{var n;class s{constructor(e,o,l){this.http=e,this.commonService=o,this.errorService=l}saveStudentdetails(e){return this.http.post(this.commonService.getAPI()+"/dev/bijoyaRegistrationForm",e).pipe((0,w.K)(this.errorService.serverError),(0,S.b)(o=>{}))}}return(n=s).\u0275fac=function(e){return new(e||n)(i.LFG(M.eN),i.LFG(E.v),i.LFG(F))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();var m=r(1281),f=r(3353),N=r(515),v=r(7579);const A=(0,f.i$)({passive:!0});let k=(()=>{class n{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return N.E;const e=(0,m.fI)(t),o=this._monitoredElements.get(e);if(o)return o.subject;const l=new v.x,d="cdk-text-field-autofilled",g=c=>{"cdk-text-field-autofill-start"!==c.animationName||e.classList.contains(d)?"cdk-text-field-autofill-end"===c.animationName&&e.classList.contains(d)&&(e.classList.remove(d),this._ngZone.run(()=>l.next({target:c.target,isAutofilled:!1}))):(e.classList.add(d),this._ngZone.run(()=>l.next({target:c.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",g,A),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:l,unlisten:()=>{e.removeEventListener("animationstart",g,A)}}),l}stopMonitoring(t){const e=(0,m.fI)(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return n.\u0275fac=function(t){return new(t||n)(i.LFG(f.t4),i.LFG(i.R0b))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})();var _=r(3238),h=r(9549);const j=new i.OlP("MAT_INPUT_VALUE_ACCESSOR"),L=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let Z=0;const D=(0,_.FD)(class{constructor(n,s,t,e){this._defaultErrorStateMatcher=n,this._parentForm=s,this._parentFormGroup=t,this.ngControl=e,this.stateChanges=new v.x}});let z=(()=>{class n extends D{get disabled(){return this._disabled}set disabled(t){this._disabled=(0,m.Ig)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(a.kI.required)??!1}set required(t){this._required=(0,m.Ig)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&(0,f.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=(0,m.Ig)(t)}constructor(t,e,o,l,d,g,c,Y,q,R){super(g,l,d,o),this._elementRef=t,this._platform=e,this._autofillMonitor=Y,this._formField=R,this._uid="mat-input-"+Z++,this.focused=!1,this.stateChanges=new v.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(x=>(0,f.qK)().has(x)),this._iOSKeyupListener=x=>{const p=x.target;!p.value&&0===p.selectionStart&&0===p.selectionEnd&&(p.setSelectionRange(1,1),p.setSelectionRange(0,0))};const y=this._elementRef.nativeElement,I=y.nodeName.toLowerCase();this._inputValueAccessor=c||y,this._previousNativeValue=this.value,this.id=this.id,e.IOS&&q.runOutsideAngular(()=>{t.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===I,this._isTextarea="textarea"===I,this._isInFormField=!!R,this._isNativeSelect&&(this.controlType=y.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}_focusChanged(t){t!==this.focused&&(this.focused=t,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){const t=this._getPlaceholder();if(t!==this._previousPlaceholder){const e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){L.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}return this.focused||!this.empty}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(f.t4),i.Y36(a.a5,10),i.Y36(a.F,8),i.Y36(a.sg,8),i.Y36(_.rD),i.Y36(j,10),i.Y36(k),i.Y36(i.R0b),i.Y36(h.G_,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,e){1&t&&i.NdJ("focus",function(){return e._focusChanged(!0)})("blur",function(){return e._focusChanged(!1)})("input",function(){return e._onInput()}),2&t&&(i.Ikx("id",e.id)("disabled",e.disabled)("required",e.required),i.uIk("name",e.name||null)("readonly",e.readonly&&!e._isNativeSelect||null)("aria-invalid",e.empty&&e.required?null:e.errorState)("aria-required",e.required)("id",e.id),i.ekj("mat-input-server",e._isServer)("mat-mdc-form-field-textarea-control",e._isInFormField&&e._isTextarea)("mat-mdc-form-field-input-control",e._isInFormField)("mdc-text-field__input",e._isInFormField)("mat-mdc-native-select-inline",e._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[i._Bn([{provide:h.Eo,useExisting:n}]),i.qOj,i.TTD]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[_.BQ,h.lN,h.lN,B,_.BQ]}),n})();const O=[{path:"",component:(()=>{var n;class s{constructor(e,o){this.commonService=e,this.bijoyaRegistrationService=o,this.studentForm=new a.cw({studentName:new a.NI(""),contactNumber:new a.NI(""),whatsappNumber:new a.NI(""),email:new a.NI(""),memberNumber:new a.NI("")}),this.commonService.hideAppDetails(),this.commonService.hideAppHeader()}onSubmit(){console.log(this.studentForm.value),this.bijoyaRegistrationService.saveStudentdetails(this.studentForm.value).subscribe(e=>{})}}return(n=s).\u0275fac=function(e){return new(e||n)(i.Y36(E.v),i.Y36(H))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-bijoya-registration"]],decls:32,vars:1,consts:[[1,"d-flex","flex-column"],[2,"color","blue","text-align","center","font-weight","bold","font-size","30px","padding","8px"],[1,"logo-div",2,"text-align","center","padding-left","42%"],["src","assets/images/coder_n_accotax_logo.png","width","50","alt",""],[1,"container",2,"text-align","center"],[1,"flex-sm-row","flex-lg-row",3,"formGroup"],[1,"pb-4"],[1,"col-lg-5","col-10","p-2"],["matInput","","formControlName","studentName"],["matInput","","formControlName","contactNumber"],["matInput","","formControlName","whatsappNumber"],["matInput","","formControlName","email"],["matInput","","formControlName","memberNumber"],[2,"text-align","center"],["type","button","mat-button","","color","light",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2),i._UZ(3,"img",3),i.qZA()(),i.TgZ(4,"div",4)(5,"form",5)(6,"fieldset",6)(7,"legend"),i._uU(8,"Bijoya Regitration:"),i.qZA(),i.TgZ(9,"mat-form-field",7)(10,"mat-label"),i._uU(11,"Student Name"),i.qZA(),i._UZ(12,"input",8),i.qZA(),i.TgZ(13,"mat-form-field",7)(14,"mat-label"),i._uU(15,"Contact Number"),i.qZA(),i._UZ(16,"input",9),i.qZA(),i.TgZ(17,"mat-form-field",7)(18,"mat-label"),i._uU(19,"Whatsapp Number"),i.qZA(),i._UZ(20,"input",10),i.qZA(),i.TgZ(21,"mat-form-field",7)(22,"mat-label"),i._uU(23,"Email"),i.qZA(),i._UZ(24,"input",11),i.qZA(),i.TgZ(25,"mat-form-field",7)(26,"mat-label"),i._uU(27,"Member Number"),i.qZA(),i._UZ(28,"input",12),i.qZA(),i.TgZ(29,"div",13)(30,"button",14),i.NdJ("click",function(){return o.onSubmit()}),i._uU(31,"Submit"),i.qZA()()()()()()),2&e&&(i.xp6(5),i.Q6J("formGroup",o.studentForm))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,z,h.KE,h.hX],styles:[".logo-div[_ngcontent-%COMP%]{padding-left:52%}fieldset[_ngcontent-%COMP%]{background-color:#fff;border-radius:2%}legend[_ngcontent-%COMP%]{background-color:#d5060645;border-radius:2%;color:#fff;padding:5px 10px}mat-form-field[_ngcontent-%COMP%]{background:none}@media (max-width: 600px){.logo-div[_ngcontent-%COMP%]{padding-left:42%}}"]}),s})()}];let U=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[b.Bz.forChild(O),b.Bz]}),s})(),V=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[T.ez,U,a.u5,a.UX,P,h.lN,M.JF]}),s})()}}]);