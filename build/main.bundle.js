webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
	    .then(function (success) { return console.log("Bootstrap success"); })
	    .catch(function (error) { return console.log(error); });


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(24);
	var platform_browser_1 = __webpack_require__(21);
	var ng_bootstrap_1 = __webpack_require__(28);
	var add_file_component_1 = __webpack_require__(36);
	var app_component_1 = __webpack_require__(40);
	var editor_component_1 = __webpack_require__(45);
	var file_service_1 = __webpack_require__(37);
	var file_hierarchy_component_1 = __webpack_require__(47);
	var files_panel_component_1 = __webpack_require__(53);
	var main_panel_component_1 = __webpack_require__(55);
	var panel_component_1 = __webpack_require__(57);
	var reference_service_1 = __webpack_require__(61);
	var reference_detail_component_1 = __webpack_require__(62);
	var reference_list_component_1 = __webpack_require__(66);
	var reference_panel_component_1 = __webpack_require__(68);
	var reference_search_component_1 = __webpack_require__(70);
	var remove_file_component_1 = __webpack_require__(48);
	var title_editor_component_1 = __webpack_require__(72);
	var AppDeclarations = [
	    add_file_component_1.AddFileComponent,
	    app_component_1.AppComponent,
	    editor_component_1.EditorComponent,
	    file_hierarchy_component_1.FileHierarchyComponent,
	    files_panel_component_1.FilesPanelComponent,
	    main_panel_component_1.MainPanelComponent,
	    panel_component_1.PanelComponent,
	    reference_detail_component_1.ReferenceDetailComponent,
	    reference_list_component_1.ReferenceListComponent,
	    reference_panel_component_1.ReferencePanelComponent,
	    reference_search_component_1.ReferenceSearchComponent,
	    remove_file_component_1.RemoveFileComponent,
	    title_editor_component_1.TitleEditorComponent,
	];
	var AppProviders = [
	    file_service_1.FileService,
	    reference_service_1.ReferenceService,
	];
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            ng_bootstrap_1.NgbModule.forRoot(),
	        ],
	        exports: [],
	        declarations: AppDeclarations.slice(),
	        providers: AppProviders.slice(),
	        bootstrap: [app_component_1.AppComponent],
	        entryComponents: [remove_file_component_1.RemoveFileComponent],
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var AddFileComponent = (function () {
	    function AddFileComponent() {
	        this.fileTypeSelected = new core_1.EventEmitter();
	        this.fileTypes = new Map();
	        this.fileTypes.set("Story Chapter", file_service_1.FileType.Story);
	        this.fileTypes.set("Player", file_service_1.FileType.Player);
	        this.fileTypes.set("NPC", file_service_1.FileType.NPC);
	        this.fileTypes.set("Location", file_service_1.FileType.Location);
	        this.fileTypes.set("Monster", file_service_1.FileType.Monster);
	        this.fileTypes.set("Spell", file_service_1.FileType.Spell);
	        this.fileTypes.set("Equipment", file_service_1.FileType.Equipment);
	        this.fileTypes.set("Rule", file_service_1.FileType.Rule);
	    }
	    Object.defineProperty(AddFileComponent.prototype, "fileTypeNames", {
	        get: function () {
	            return Array.from(this.fileTypes.keys());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AddFileComponent.prototype.emitSelection = function (fileType) {
	        this.fileTypeSelected.emit(this.fileTypes.get(fileType));
	    };
	    return AddFileComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], AddFileComponent.prototype, "fileTypeSelected", void 0);
	AddFileComponent = __decorate([
	    core_1.Component({
	        selector: 'add-file',
	        template: __webpack_require__(39),
	    }),
	    __metadata("design:paramtypes", [])
	], AddFileComponent);
	exports.AddFileComponent = AddFileComponent;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var data_1 = __webpack_require__(38);
	(function (FileType) {
	    FileType[FileType["Story"] = 0] = "Story";
	    FileType[FileType["Player"] = 1] = "Player";
	    FileType[FileType["NPC"] = 2] = "NPC";
	    FileType[FileType["Location"] = 3] = "Location";
	    FileType[FileType["Monster"] = 4] = "Monster";
	    FileType[FileType["Spell"] = 5] = "Spell";
	    FileType[FileType["Equipment"] = 6] = "Equipment";
	    FileType[FileType["Rule"] = 7] = "Rule";
	})(exports.FileType || (exports.FileType = {}));
	var FileType = exports.FileType;
	var DocumentRecord = (function () {
	    function DocumentRecord(title, parentIndex, index) {
	        this.title = title;
	        this.parentIndex = parentIndex;
	        this.index = index;
	    }
	    DocumentRecord.prototype.equals = function (other) {
	        return this.title === other.title &&
	            this.parentIndex === other.parentIndex &&
	            this.index === other.index;
	    };
	    return DocumentRecord;
	}());
	exports.DocumentRecord = DocumentRecord;
	var IndexMap = new Map();
	IndexMap.set(FileType.Story, 0);
	IndexMap.set(FileType.Player, 1);
	IndexMap.set(FileType.NPC, 2);
	IndexMap.set(FileType.Location, 3);
	IndexMap.set(FileType.Monster, 4);
	IndexMap.set(FileType.Spell, 5);
	IndexMap.set(FileType.Equipment, 6);
	IndexMap.set(FileType.Rule, 7);
	var NameMap = new Map();
	NameMap.set(FileType.Story, "Chapter");
	NameMap.set(FileType.Player, "Player");
	NameMap.set(FileType.NPC, "NPC");
	NameMap.set(FileType.Location, "Location");
	NameMap.set(FileType.Monster, "Monster");
	NameMap.set(FileType.Spell, "Spell");
	NameMap.set(FileType.Equipment, "Equipment");
	NameMap.set(FileType.Rule, "Rule");
	var FileService = (function () {
	    function FileService() {
	        this.fileTree = data_1.Data;
	        this.selectedFile = null;
	        this.selectedFileParentIndex = null;
	        this.selectedFileIndex = null;
	    }
	    Object.defineProperty(FileService.prototype, "allFiles", {
	        get: function () {
	            var files = [];
	            for (var i = 0; i < this.fileTree.length; i++) {
	                var folder = this.fileTree[i];
	                for (var j = 0; j < folder.children.length; j++) {
	                    var file = folder.children[j];
	                    files.push(new DocumentRecord(file.title, i, j));
	                }
	            }
	            return files;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FileService.prototype.addFile = function (type) {
	        var file = {
	            title: "Untitled " + NameMap.get(type),
	            content: "",
	            selected: false,
	            minimized: false,
	        };
	        var index = IndexMap.get(type);
	        var folder = this.fileTree[index];
	        var len = folder.children.push(file);
	        folder.expanded = true;
	        this.toggleFile(index, len - 1);
	    };
	    FileService.prototype.getFile = function (parentIndex, index) {
	        var folder = this.fileTree[parentIndex];
	        return folder.children[index];
	    };
	    FileService.prototype.toggleFolder = function (index) {
	        var folder = this.fileTree[index];
	        folder.expanded = !folder.expanded;
	    };
	    FileService.prototype.isFileSelected = function (parentIndex, index) {
	        return parentIndex === this.selectedFileParentIndex && index === this.selectedFileIndex;
	    };
	    FileService.prototype.clearSelectedFile = function () {
	        if (this.selectedFile !== null) {
	            this.selectedFile.selected = false;
	            this.selectedFile = null;
	            this.selectedFileParentIndex = null;
	            this.selectedFileIndex = null;
	        }
	    };
	    FileService.prototype.toggleFile = function (parentIndex, index) {
	        if (this.isFileSelected(parentIndex, index)) {
	            return;
	        }
	        this.clearSelectedFile();
	        var folder = this.fileTree[parentIndex];
	        this.selectedFile = folder.children[index];
	        this.selectedFile.selected = true;
	        this.selectedFileParentIndex = parentIndex;
	        this.selectedFileIndex = index;
	    };
	    FileService.prototype.removeFile = function (parentIndex, index) {
	        if (this.isFileSelected(parentIndex, index)) {
	            this.clearSelectedFile();
	        }
	        var folder = this.fileTree[parentIndex];
	        folder.children.splice(index, 1);
	    };
	    return FileService;
	}());
	FileService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], FileService);
	exports.FileService = FileService;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	exports.Data = [
	    {
	        name: "Story",
	        expanded: false,
	        children: [
	            {
	                title: "L1. Entry Cave",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>\u201CThe cave mouth opens into darkness from which a breeze blows, carrying the faint odor of death. Inside is a natural cave, its floor and ceiling uneven. The passage leads to the west, narrowing as it proceeds.\u201D</i></p>\n<p>A body is sprawled on the floor 60 feet into the passage.</p>\n<p><b>When the characters get close to the body.</b><i>\u201CThe corpse of a human male is sprawled here on its back. It wears only leather breeches.\u201D</i></p>\n<p>The body is a zombie, but it animates only if touched. Then, it attacks.</p>\n<p><b>Western Passage.</b> L2. Guard Cave</p>\n        "
	            },
	            {
	                title: "L2. Guard Cave",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>\u201CA round, high-ceilinged cave opens here. It has two narrow exits, one leading north and the other south. A flat boulder sits in the center of the cave. It\u2019s about six feet across, eight feet long, and three feet high. Dark stains color its top.\u201D</i></p>\n<p>The boulder is stained with dry blood.</p>\n<p>Above the eastern entrance, two zombies stand on a ledge 10 feet up. They hold a wooden box full of rocks between them. When they spot an intruder, they let the box go so it crashes down on the interloper. The target must succeed on a DC 12 Dexterity saving throw or take 7 (2d6) bludgeoning damage. The zombies then jump down from the ledge (taking 1d6 bludgeoning damage each) to attack.</p>\n<p><b>Eastern Passage.</b> L1. Entry Cave</p>\n<p><b>Northern Passage.</b> L3. Corpse Cave</p>\n<p><b>Souther Passage.</b> L4. Dancing Dead</p>"
	            },
	            {
	                title: "L3. Corpse Cave",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>\u201CMotionless humanoid figures dressed in dirty clothes or scraps of armor are propped against the walls of this cave. Some are little more than skeletons with wisps of hair and skin stretched tightly over their bones. Others are fresher. A few old shortswords lie on the dusty floor.\u201D</i></p>\n<p>Twelve corpses are stored in this chamber. Seven are skeletal, and five are fresher. Three skeletons remain still among the other remains. They attack anyone who touches them or the corpses here.</p>\n<p><b>Southern Passage.</b> L2. Guard Cave</p>"
	            },
	            {
	                title: "L4. Dancing Dead",
	                selected: false,
	                minimized: false,
	                content: "\n<p><b>Entering from the northern passage.</b> <i>\u201CThis narrow passage is about ten feet high in most places, with rough, irregular walls. Protruding spurs on the walls are coated in dried blood.\u201D</i></p>\n<p>Eventually the natural passage widens out.</p>\n<p><i>\u201CThe star-shaped cavern ahead has many clefts in its walls. Only two, across the cavern, seem large enough to traverse. Three zombies lurch about the area. One is costumed like a bear, another is dressed as a lady in a frilly dress and thick makeup, and the last is costumed as a jester with jingling bells on its collar and sleeves.\u201D</i></p>\n<p>These three zombies have orders to playact for a few moments when they spot intruders, using the distraction to approach and attack.</p>\n<p>Sounds of combat in this room alert the necromancer Oreioth (in area L5. Workshop) that intruders are nearby. Oreioth climbs the stairs in area L5 to peer into the end of the western passage, hoping to get a chance to trigger the trap there.</p>\n<p><b>Southwestern Passage.</b> This tunnel leads to a small cavern with two closed iron chests resting on the floor. A peephole in the south wall allows someone standing at the top of the stairs in area L5 to observe the chests. By the peephole is a lever that opens a trapdoor in the ceiling above the chests, releasing a rockfall. </p>\n<p>If Oreioth is in position, he waits until at least two intruders have entered the cave, then he moves away from the peephole and pulls the lever. When he does, he cries, easily audible through the peephole, <i>\u201CYou dare pit yourselves against the Lord of Lance Rock? Death is your reward!\u201D</i> Then he continues to cackle as he retreats. </p>\n<p>Those in the room can make a DC 10 Dexterity saving throw, taking 7 (2d6) bludgeoning damage on a failure, or half that damage on a success.</p>\n<p><b>The iron chests are empty.</b></p>\n<p><b>Southeastern Passage.</b> L5. Workshop</p>"
	            },
	            {
	                title: "L5. Workshop",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>\u201CThe passage opens into an enormous cavern illuminated by several guttering torches set in sconces on the walls. The floor is uneven, and the ceiling is forty feet up. Three flat boulders near the passage serve as tables for human corpses. Severed body parts sit in baskets by the corpses, covered in dry gore. A figure in a dark hood stands by the third table, its back to you. Matted hair juts from the hood, and the figure holds a bone needle threaded with dark cord in its hand.</i></p>\n<p><i>Farther to the west, a stone stair climbs the north wall, ending near the ceiling. A stone slab like a counter juts from the wall across from the base of the stairs. It holds saws, knives, and other tools. Four skeletons stand beyond this tool bench, guarding a wide passage that exits the room to the west.\u201D</i></p>\n<p>The hooded figure is a zombie.</p>\n<p>Five crawling claws hide among the other body parts in the baskets</p>\n<p>If intruders do anything other than turn back, the monsters attack.</p>\n<p>If the characters did not alert Oreioth in L4. Dancing Dead, they find Oreioth arranging and cleaning his tools on the tool bench. Otherwise, he watches warily from behind the four skeletons. If confronted, he shrinks from conflict and orders his skeletons to attack while he retreats into area L6. Study.</p>\n<p>\u2022 Refers to himself in the third person and by his self-appointed title (the Lord of Lance Rock)</p>\n<p>\u2022 Afraid of physical confrontation, but he pretends bravery when his pets shield him, saying, <i>\u201CBow before the Lord of Lance Rock! Me! Behold my dark terrors!\u201D</i></p>\n<p>\u2022 Willing to consider surrender or offers of truce, as long as the intruders leave the cave.</p>\n<p><b>Stairs.</b> The steps along the north wall lead up to a ledge overlooking the room. Peephole looks into L4. Dancing Dead and the lever controls the trap there.</p>\n<p><b>Tools.</b> Stone counter serves as a tool bench. Tools include saws, knives, awls, embalming tools, and metal bowls. There is a jug of grain alcohol and a cask of fresh water. The tools are clean.</p>\n<p><b>Northern Passage.</b> The workshop narrows into another passage that splits and links up twice. It gently descends to this area. L6. Study</p>\n<p><b>Northeastern Passage.</b> L4. Dancing Dead</p>"
	            },
	            {
	                title: "L6. Study",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>\u201CAn oval cavern opens here, forty feet wide and sixty feet long. Dark purple tapestries hang on the walls. At the center stands a pedestal fashioned of severed arms arranged to clutch one another in a cone. Cradled in the uppermost hands is a glowing crystal sphere. A dark sigil with an eyelike slit floats above the sphere.\u201D</i></p>\n<p>The sigil is the Elder Elemental Eye. It disappears if an illusion that disappears if it or the pedestal is disturbed.</p>\n<p>If he is here, Oreioth is hiding behind the draperies at the north end of the room, holding a wand of magic missiles. He reacts only if attacked or someone approaches the floating sigil. In the latter case, he yells, <i>\u201CCan\u2019t you see it? It\u2019s the Eye! It sees your every move! Don\u2019t you fear it?\u201D</i></p>\n<p>If he dies, Oreioth turns into a black flame. The flame dwindles to nothing with a plaintive wail and vanishes.</p>\n<p><b>Treasure.</b> The glowing sphere is a driftglobe. Behind the draperies are niches where Oreioth keeps his food, drink, supplies, clothes, and bedding, as well as 165 sp, 78 gp and four polished jet gems (50 gp each). If Oreioth failed to retrieve it, the wand of magic missiles is stored in a niche.</p>"
	            }
	        ]
	    },
	    {
	        name: "Players",
	        expanded: false,
	        children: []
	    },
	    {
	        name: "NPCs",
	        expanded: false,
	        children: [
	            {
	                title: "Oreioth",
	                selected: false,
	                minimized: false,
	                content: "\nMedium humanoid (human), chaotic evil\nArmor Class 11 (14 with mage armor)\nHit Points 39 (6d8 + 12)\nSpeeds 30 ft.\n\nSTR 8 (-1)\nDEX 13 (+1)\nCON 14 (+2)\nINT 16 (+3)\nWIS 9 (-1)\nCHA 11 (+0)\n\nSaving Throws Wis +1\nSkills Arcana +5, Investigation +5, Medicine +1\nSenses passive Perception 9\nLanguages Common, Abyssal\nChallenge 2 (450 XP)\n\nGrim Harvest. Once per turn when Oreioth kills one or more creatures with a spell of 1st level or higher, he regains hit points equal to twice the spell\u2019s level.\n\nSpellcasting. Oreioth is a 6th-level spell caster. His spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). He has the following wizard spells prepared:\n\n\t\u2022\tCantrips (at will): chill touch, minor illusion, prestidigitation, shocking grasp\n\t\u2022\t1st level (4 slots): false life, mage armor, magic missile, ray of sickness\n\t\u2022\t2nd level (3 slots): crown of madness, misty step\n\t\u2022\t3rd level (3 slots): animate dead, vampiric touch\n\nSwift Animation (Recharges after a Long Rest). When a living Medium or Small humanoid within 30 feet of Oreioth dies, he can use an action on his next turn to cast animate dead on that humanoid\u2019s corpse, instead of using the spell\u2019s normal casting time.\n\nActions\nDagger. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.\n"
	            }
	        ]
	    },
	    {
	        name: "Locations",
	        expanded: false,
	        children: [
	            {
	                title: "Necromancer's Cave",
	                selected: false,
	                minimized: false,
	                content: "\n<p>A few hundred feet south of the stone is a ravine choked with brush. A trail leads into the brush near a neatly-painted sign that reads, in Common:</p>\n<p><i>Come no closer</i></p>\n<p><i>Lest you catch</i></p>\n<p><i>The disfiguring plague</i></p>\n<p><i>That afflicts me</i>!</p>\n<p><i>The Lord of Lance Rock</i></p>\n<p>The trail continues down to a cave mouth. Another warning sign with the same message is posted by the opening.</p>\n<p>The cave leads to L1. Entry Cave</p>\n"
	            },
	        ]
	    },
	    {
	        name: "Monsters",
	        expanded: false,
	        children: [
	            {
	                title: "Adult Red Dragon",
	                selected: false,
	                minimized: false,
	                content: "Huge dragon, chaotic evil\nArmor Class 19 (natural armor) \nHit Points 256 (19d12 + 133) \nSpeed 40 ft., climb 40 ft., fly 80 ft.\n- STR 27 (+8)\n- DEX 10 (+0)\n- CON 25 (+7)\n- INT 16 (+3)\nSaving Throws Dex +6, Con +13, Wis +7, Cha +11 \nSkills Perception +13, Stealth +6 \nDamage Immunities fire \nSenses blindsight 60 ft., darkvision 120 ft., passive Perception 23 \nLanguages Common, Draconic \nChallenge 17 (18,000 XP)\nLegendary Resistance (3/Day). If the dragon fails a saving throw, it can choose to succeed instead.\nActions\n- Multiattack. The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.\n- Bite. Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.\n- Claw. Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.\n- Tail. Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.\n- Frightful Presence. Each creature of the dragon\u2019s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\u2019s saving throw is successful or the effect ends for it, the creature is immune to the dragon\u2019s Frightful Presence for the next 24 hours.\n- Fire Breath (Recharge 5\u20136). The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.\nLegendary Actions\nThe dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature\u2019s turn. The dragon regains spent legendary actions at the start of its turn.\n- Detect. The dragon makes a Wisdom (Perception) check. \n- Tail Attack. The dragon makes a tail attack. \n- Wing Attack (Costs 2 Actions). The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.\nThe odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry.\nA Red Dragon\u2019s Lair\nRed dragons lair in high mountains or hills, dwelling in caverns under snow-capped peaks, or within the deep halls of abandoned mines and dwarven strongholds. Caves with volcanic or geothermal activity are the most highly prized red dragon lairs, creating hazards that hinder intruders and letting searing heat and volcanic gases wash over a dragon as it sleeps.\nWith its hoard well protected deep within the lair, a red dragon spends as much of its time outside the mountain as in it. For a red dragon, the great heights of the world are the throne from which it can look out to survey all it controls\u2014and the wider world it seeks to control.\nThroughout the lair complex, servants erect monuments to the dragon\u2019s power, telling the grim story of its life, the enemies it has slain, and the nations it has conquered.\nLair Actions\nOn initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can\u2019t use the same effect two rounds in a row: \u2022 Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser\u2019s area must make a DC 15 Dexterity saving throw, tak- ing 21 (6d6) fire damage on a failed save, or half as much damage on a successful one. \u2022 A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone. \u2022 Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initia- tive count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.\nRegional Effects\nThe region containing a legendary red dragon\u2019s lair is warped by the dragon\u2019s magic, which creates one or more of the following effects:\n\u2022 Small earthquakes are common within 6 miles of the dragon\u2019s lair. \n\u2022 Water sources within 1 mile of the lair are supernatu- rally warm and tainted by sulfur. \n\u2022 Rocky fissures within 1 mile of the dragon\u2019s lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.\nIf the dragon dies, these effects fade over the course of 1d10 days."
	            },
	            {
	                title: "Brown Bear",
	                selected: false,
	                minimized: false,
	                content: "Large beast, unaligned\nArmor Class 11 (natural armor) \nHit Points 34 (4d10 + 12) \nSpeed 40 ft., climb 30 ft.\n- STR 19 (+4)\n- DEX 10 (+0)\n- CON 16 (+3)\n- INT 2 (\u22124)\n- WIS 13 (+1)\n- CHA 7 (\u22122)\nSkills Perception +3 \nSenses passive Perception 13 \nLanguages \u2014 \nChallenge 1 (200 XP)\nKeen Smell. The bear has advantage on Wisdom (Perception) checks that rely on smell.\nActions\n- Multiattack. The bear makes two attacks: one with its bite and one with its claws.\n- Bite. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.\n- Claws. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
	            },
	            {
	                title: "Crawling Claw",
	                selected: false,
	                minimized: false,
	                content: "\nTiny undead, neutral evil\nArmor Class 12\nHit Points 2 (1d4)\nSpeeds 20 ft., climb 20 ft.\n\nSTR 13 (+1)\nDEX 14 (+2)\nCON 11 (+0)\nINT 5 (-3)\nWIS 10 (+0)\nCHA 4 (-3)\n\nDamage Immunities poison\nCondition Immunities charmed, exhaustion, poisoned\nSenses darkvision 30 ft., passive Perception 10\nLanguages understands Common but can\u2019t speak\nChallenge 0 (10 XP)\n\nTurn Immunity. The claw is immune to effects that turn undead.\n\nActions\nClaw. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning or slashing damage (claw's choice).\n"
	            },
	            {
	                title: "Flying Sword",
	                selected: false,
	                minimized: false,
	                content: "Small construct, unaligned\nArmor Class 17 (natural armor) \nHit Points 17 (5d6) \nSpeed 0 ft., fly 50 ft. (hover)\n- STR 12 (+1)\n- DEX 15 (+2)\n- CON 11 (+0)\n- INT 1 (\u22125)\n- WIS 5 (\u22123)\n- CHA 1 (\u22125)\nSaving Throws Dex +4 \nDamage Immunities poison, psychic \nCondition Immunities blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned \nSenses blindsight 60 ft. (blind beyond this radius), passive Perception 7 \nLanguages \u2014 Challenge 1/4 (50 XP)\nAntimagic Susceptibility. The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster\u2019s spell save DC or fall unconscious for 1 minute.\nFalse Appearance. While the sword remains motionless and isn\u2019t flying, it is indistinguishable from a normal sword.\nActions\n- Longsword. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.\nA magically animated flying sword dances through the air, fighting like a warrior that can\u2019t be injured."
	            },
	            {
	                title: "Frost Giant",
	                selected: false,
	                minimized: false,
	                content: "Huge giant, neutral evil\nArmor Class 15 (patchwork armor) \nHit Points 138 (12d12 + 60) \nSpeed 40 ft.\n- STR 23 (+6)\n- DEX 9 (\u22121)\n- CON 21 (+5)\n- INT 9 (\u22121)\n- WIS 10 (+0)\n- CHA 12 (+1)\nSaving Throws Con +8, Wis +3, Cha +4 \nSkills Athletics +9, Perception +3 \nDamage Immunities cold Senses passive Perception 13 \nLanguages Giant \nChallenge 8 (3,900 XP)\nActions\n- Multiattack. The giant makes two greataxe attacks. \n- Greataxe. Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage.\n- Rock. Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.\nFrost giants are creatures of ice and snow, with hair and beards of pale white or light blue, and flesh as blue as glacial ice. They respect only brute strength and skill in battle."
	            },
	            {
	                title: "Ghost",
	                selected: false,
	                minimized: false,
	                content: "Medium undead, any alignment\nArmor Class 11 \nHit Points 45 (10d8) \nSpeed 0 ft., fly 40 ft. (hover) \n- STR  7 (\u22122) \n- DEX  13 (+1) \n- CON  10 (+0) \n- INT  10 (+0) \n- WIS  12 (+1) \n- CHA  17 (+3) \nDamage Resistances acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks \nDamage Immunities cold, necrotic, poison \nCondition Immunities charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained Senses darkvision 60 ft., passive Perception 11 \nLanguages any languages it knew in life Challenge 4 (1,100 XP)\nEthereal Sight. The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.\nIncorporeal Movement. The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.\nActions\n- Withering Touch. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.\n- Etherealness. The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can\u2019t affect or be affected by anything on the other plane.\n- Horrifying Visage. Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 \u00D7 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target\u2019s saving throw is successful or the effect ends for it, the target is immune to this ghost\u2019s Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.\n- Possession (Recharge 6). One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn\u2019t deprive the target of awareness. The ghost can\u2019t be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target\u2019s statistics, but doesn\u2019t gain access to the target\u2019s knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost\u2019s Possession for 24 hours after succeeding on the saving throw or after the possession ends.\nA ghost is the soul of a once-living creature, bound to haunt a location, creature, or object from its life."
	            },
	            {
	                title: "Ghoul",
	                selected: false,
	                minimized: false,
	                content: "Medium undead, chaotic evil\nArmor Class 12 \nHit Points 22 (5d8) \nSpeed 30 ft.\n- STR 13  \n- DEX (+1) \n- INT 15 (+2) \n- WIS 10(+0) \n- CHA 6 (-2)\nDamage Immunities poison \nCondition Immunities charmed, exhaustion, poisoned \nSenses darkvision 60 ft., passive Perception 10 \nLanguages Common \nChallenge 1 (200 XP)\nActions\n- Bite. Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.\n- Claws. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\nWith their razor-sharp teeth and jagged claws, ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh."
	            },
	            {
	                title: "Giant Spider",
	                selected: false,
	                minimized: false,
	                content: "Large beast, unaligned\nArmor Class 14 (natural armor) \nHit Points 26 (4d10 + 4) \nSpeed 30 ft., climb 30 ft.\n- STR 14 (+2)\n- DEX 16 (+3)\n- CON 12 (+1)\n- INT 2 (\u22124)\n- WIS 11 (+0)\n- CHA 4 (\u22123)\n\nSkills Stealth +7 \nSenses blindsight 10 ft., darkvision 60 ft., passive Perception 10 \nLanguages \u2014 \nChallenge 1 (200 XP)\nSpider Climb. The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.\nWeb Sense. While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.\nWeb Walker. The spider ignores movement restrictions caused by webbing.\nActions\n- Bite. Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.\n- Web (Recharge 5\u20136). Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
	            },
	            {
	                title: "Goblin",
	                selected: false,
	                minimized: false,
	                content: "Small humanoid (goblinoid), neutral evil\nArmor Class 15 (leather armor, shield) \nHit Points 7 (2d6) \nSpeed 30 ft.\n- WIS 10 (+0)\n- CHA 7 (\u22122)\n- STR 8 (\u22121)\n- DEX 14 (+2)\n- CON 10 (+0)\n- INT 10 (+0)\n- WIS 8 (\u22121)\n- CHA 8 (\u22121)\nSkills Stealth +6 \nSenses darkvision 60 ft., passive Perception 9 \nLanguages Common, Goblin \nChallenge 1/4 (50 XP)\nNimble Escape. The goblin can take the Disengage or Hide action as a bonus action on each of its turns.\nActions\n- Scimitar. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.\n- Shortbow. Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.\nGoblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures."
	            },
	            {
	                title: "Kobold",
	                selected: false,
	                minimized: false,
	                content: "Small humanoid (kobold), lawful evil\nArmor Class 12 Hit Points 5 (2d6 \u2212 2) \nSpeed 30 ft.\n- STR 7 (\u22122)\n- DEX 15 (+2)\n- CON 9 (\u22121)\n- INT 8 (\u22121)\n- WIS 7 (\u22122)\n- CHA 8 (\u22121)\n\nSenses darkvision 60 ft., passive Perception 8 \nLanguages Common, Draconic \nChallenge 1/8 (25 XP)\n\nSunlight Sensitivity. While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.\nPack Tactics. The kobold has advantage on an attack roll against a creature if at least one of the kobold\u2019s allies is within 5 feet of the creature and the ally isn\u2019t incapacitated.\nActions\n- Dagger. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.\n- Sling. Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.\nKobolds are craven reptilian humanoids that commonly infest dungeons. They make up for their physical ineptitude with a cleverness for trap making."
	            },
	            {
	                title: "Ogre",
	                selected: false,
	                minimized: false,
	                content: "Large giant, chaotic evil\nArmor Class 11 (hide armor) \nHit Points 59 (7d10 + 21) \nSpeed 40 ft.\n- STR 19 (+4)\n- DEX 8 (\u22121)\n- CON 16 (+3)\n- INT 5 (\u22123)\n- WIS 7 (\u22122)\n- CHA 7 (\u22122)\nSenses darkvision 60 ft., passive Perception 8 \nLanguages Common, Giant \nChallenge 2 (450 XP)\nActions\n- Greatclub. Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.\n- Javelin. Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.\n- Ogres are hulking giants notorious for their quick tempers. When its rage is incited, an ogre lashes out in a frustrated tantrum until it runs out of objects or creatures to smash."
	            },
	            {
	                title: "Orc",
	                selected: false,
	                minimized: false,
	                content: "Medium humanoid (orc), chaotic evil\nArmor Class 13 (hide armor) \nHit Points 15 (2d8 + 6) \nSpeed 30 ft.\n- STR 16 (+3)\n- DEX 12 (+1)\n- CON 16 (+3)\n- INT 7 (\u22122)\n- WIS 11 (+0)\n- CHA 10 (+0)\nSkills Intimidation +2 \nSenses darkvision 60 ft., passive Perception 10 \nLanguages Common, \nOrc Challenge 1/2 (100 XP)\nAggressive. As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.\nActions\n- Greataxe. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.\n- Javelin. Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.\n- Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them."
	            },
	            {
	                title: "Skeleton",
	                selected: false,
	                minimized: false,
	                content: "Medium undead, lawful evil\nArmor Class 13 (armor scraps) \nHit Points 13 (2d8 + 4) \nSpeed 30 ft.\n- STR 10 (+0)\n- DEX 14 (+2)\n- CON 15 (+2)\n- INT 6 (\u22122)\n- WIS 8 (\u22121)\n- CHA 5 (\u22123)\nDamage Vulnerabilities bludgeoning \nDamage Immunities poison \nCondition Immunities exhaustion, poisoned \nSenses darkvision 60 ft., passive Perception 9 \nLanguages understands all languages it knew in life\nbut can\u2019t speak \nChallenge 1/4 (50 XP)\nActions\n- Shortsword. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.\n- Shortbow. Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
	            },
	            {
	                title: "Stirge",
	                selected: false,
	                minimized: false,
	                content: "Tiny beast, unaligned\nArmor Class 14 (natural armor) \nHit Points 2 (1d4) \nSpeed 10 ft., fly 40 ft.\n- STR (\u22123)16 (+3) \n- DEX 11 (+0)\n- CON 2 (\u22124)\n- INT 8 (\u22121)\n- WIS 6 (\u22122)\n- CHA 4\nSenses darkvision 60 ft., passive Perception 9 \nLanguages \u2014 \nChallenge 1/8 (25 XP)\nActions\n- Blood Drain. Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn\u2019t attack. Instead, at the start of each of the stirge\u2019s turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.\nThis horrid monster looks like a cross between a large bat and an oversized mosquito. Its legs end in sharp pincers, and its long, needle-like proboscis slashes the air as it seeks to feed on the blood of living creatures."
	            },
	            {
	                title: "Troll",
	                selected: false,
	                minimized: false,
	                content: "Large giant, chaotic evil\nArmor Class 15 (natural armor) \nHit Points 84 (8d10 + 40) \nSpeed 30 ft.\n- STR 18 (+4)\n- DEX 13 (+1)\n- CON 20 (+5)\n- INT 7 (\u22122)\n- WIS 9 (\u22121)\n- CHA 7 (\u22122)\nSkills Perception +2 Senses darkvision 60 ft., passive Perception 12 Languages Giant Challenge 5 (1,800 XP)\nKeen Smell. The troll has advantage on Wisdom (Perception) checks that rely on smell.\nRegeneration. The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn\u2019t function at the start of the troll\u2019s next turn. The troll dies only if it starts its turn with 0 hit points and doesn\u2019t regenerate.\nActions\n- Multiattack. The troll makes three attacks: one with its bite and two with its claws.\n- Bite. Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.\n- Claw. Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.\nFearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll\u2019s flesh."
	            },
	            {
	                title: "Wolf",
	                selected: false,
	                minimized: false,
	                content: "Medium beast, unaligned\nArmor Class 13 (natural armor) Hit Points 11 (2d8 + 2) Speed 40 ft.\n- STR 12 (+1)\n- DEX 15 (+2)\n- CON 12 (+1)\n- INT 3 (\u22124)\n- WIS 12 (+1)\n- CHA 6 (\u22122)\nSkills Perception +3, Stealth +4 Senses passive Perception 13 Languages \u2014 Challenge 1/4 (50 XP)\nKeen Hearing and Smell. The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.\nPack Tactics. The wolf has advantage on attack rolls against a creature if at least one of the wolf\u2019s allies is within 5 feet of the creature and the ally isn\u2019t incapacitated.\nActions\n- Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
	            },
	            {
	                title: "Young Green Dragon",
	                selected: false,
	                minimized: false,
	                content: "Large dragon, lawful evil\nArmor Class 18 (natural armor) \nHit Points 136 (16d10 + 48) \nSpeed 40 ft., fly 80 ft., swim 40 ft.\n- STR 19 (+4)\n- DEX 12 (+1)\n- CON 17 (+3)\n- INT 16 (+3)\n- WIS 13 (+1)\nSaving Throws Dex +4, Con +6, Wis +4, Cha +5 \nSkills Deception +5, \nPerception +7, \nStealth +4 Damage Immunities poison Condition Immunities poisoned Senses blindsight 30 ft., darkvision 120 ft., passive\nPerception 17 Languages Common, Draconic Challenge 8 (3,900 XP)\nAmphibious. The dragon can breathe air and water.\nActions\n- Multiattack. The dragon makes three attacks: one with its bite and two with its claws.\n- Bite. Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.\n- Claw. Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.\n- Poison Breath (Recharge 5\u20136). The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.\nThe most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. A green dragon is recognized by the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull."
	            },
	            {
	                title: "Zombie",
	                selected: false,
	                minimized: false,
	                content: "Medium undead, neutral evil\nArmor Class 8 Hit Points 22 (3d8 + 9) \nSpeed 20 ft.\n- STR 13 (+1)\n- DEX 6 (\u22122)\n- CON 16 (+3)\n- INT 3 (\u22124)\n- WIS 6 (\u22122)\n- CHA 5 (\u22123)\nSaving Throws Wis +0 \nDamage Immunities poison \nCondition Immunities poisoned \nSenses darkvision 60 ft., passive \nPerception 8 Languages understands the languages it knew in life but can\u2019t speak Challenge 1/4 (50 XP)\nUndead Fortitude. If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.\nActions\n- Slam. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.\nUndead zombies move with a jerky, uneven gait. They are clad in the moldering apparel they wore when put to rest, and carry the stench of decay."
	            }
	        ]
	    },
	    {
	        name: "Spells",
	        expanded: false,
	        children: [
	            {
	                title: "Acid Splash",
	                selected: false,
	                minimized: false,
	                content: "Conjuration cantrip\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nYou hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	            },
	            {
	                title: "Aid",
	                selected: false,
	                minimized: false,
	                content: "2nd-level abjuration\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S, M (a tiny strip of white cloth) Duration: 8 hours\nYour spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target\u2019s hit point maximum and current hit points increase by 5 for the duration.\nAt Higher Levels. When you cast this spell using\na spell slot of 3rd level or higher, a target\u2019s hit points increase by an additional 5 for each slot level above 2nd."
	            },
	            {
	                title: "Animate Dead",
	                selected: false,
	                minimized: false,
	                content: "3rd-level necromancy\nCasting Time: 1 minute\nRange: 10 feet\nComponents: V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)\nDuration: Instantaneous\n\nThis spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).\n\nOn each of your turns, you can use a bonus action mentally command any creature you made with this spell if the creature is within 60 feel of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. lf you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you animate or reassert contraI over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
	            },
	            {
	                title: "Antimagic Field",
	                selected: false,
	                minimized: false,
	                content: "8th-level abjuration\nCasting Time: 1 action\nRange: Self (10-foot-radius sphere)\nComponents: V, S, M (a pinch of powdered iron or iron filings)\nDuration: Concentration, up to 1 hour\nA 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that su uses the multiverse. Within the sphere, spells can\u2019t be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.\nSpells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can\u2019t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn\u2019t function, but the time it spends suppressed counts against its duration.\nTargeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no eect on that target.\nAreas of Magic. The area of another spell or magical effect, such as fireball, can\u2019t extend into the sphere.\nIf the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.\n\nSpells. \nAny active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.\nMagic Items. The properties and powers of\nmagic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.\nA magic weapon\u2019s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you  re a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.\nMagical Travel. Teleportation and planar travel\nfail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.\nCreatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.\nDispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by di erent antimagic  eld spells don\u2019t nullify each other."
	            },
	            {
	                title: "Arcane Eye",
	                selected: false,
	                minimized: false,
	                content: "4th-level divination\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S, M (a bit of bat fur) Duration: Concentration, up to 1 hour\nYou create an invisible, magical eye within range that hovers in the air for the duration.\nYou mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.\nAs an action, you can move the eye up to 30 feet in\nany direction. There is no limit to how far away from\nyou the eye can move, but it can\u2019t enter another plane of existence. A solid barrier blocks the eye\u2019s movement, but the eye can pass through an opening as small as 1 inch in diameter."
	            },
	            {
	                title: "Arcane Lock",
	                selected: false,
	                minimized: false,
	                content: "2nd-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (gold dust worth at least 25 gp,\nwhich the spell consumes) Duration: Until dispelled\nYou touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.\nWhile a ected by this spell, the object is more di cult to break or force open; the DC to break it or pick any locks on it increases by 10."
	            },
	            {
	                title: "Astral Projection",
	                selected: false,
	                minimized: false,
	                content: "9th-level necromancy\nCasting Time: 1 hour\nRange: 10 feet\nComponents: V, S, M (for each creature you a ect with\nthis spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)\nDuration: Special\nYou and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn\u2019t need food or air and doesn\u2019t age.\nYour astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal di erence is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can  nd your way home. If the cord is cut\u2014something that can happen only when an e ect speci cally states that it does\u2014your soul and body are separated, killing you instantly.\nYour astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other e ects that apply to it have no e ect on your physical body, nor do they persist when you return to it.\nThe spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the a ected creature returns to its physical body,\nand it awakens.\nThe spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature\u2019s original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature\u2019s astral form back to its body, ending its state of suspended animation.\nIf you are returned to your body prematurely, your companions remain in their astral forms and must  nd their own way back to their bodies, usually by dropping to 0 hit points."
	            },
	            {
	                title: "Augury",
	                selected: false,
	                minimized: false,
	                content: "2nd-level divination (ritual)\nCasting Time: 1 minute\nRange: Self\nComponents: V, S, M (specially marked sticks, bones,\nor similar tokens worth at least 25 gp) Duration: Instantaneous\nBy casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a speci c course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:\n\u2022 Weal, for good results\n\u2022 Woe, for bad results\n\u2022 Weal and woe, for both good and bad results\n\u2022 Nothing, for results that aren\u2019t especially good or bad\nThe spell doesn\u2019t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.\nIf you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the  rst that you get a random reading. The DM makes this roll in secret."
	            },
	            {
	                title: "Beacon of Hope",
	                selected: false,
	                minimized: false,
	                content: "3rd-level abjuration\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S\nDuration: Concentration, up to 1 minute\nThis spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
	            },
	            {
	                title: "Blade Barrier",
	                selected: false,
	                minimized: false,
	                content: "6th-level evocation\nCasting Time: 1 action\nRange: 90 feet\nComponents: V, S\nDuration: Concentration, up to 10 minutes\nYou create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and\n5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is di cult terrain.\nWhen a creature enters the wall\u2019s area for the  rst time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
	            },
	            {
	                title: "Bless",
	                selected: false,
	                minimized: false,
	                content: "1st-level enchantment\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S, M (a sprinkling of holy water) Duration: Concentration, up to 1 minute\nYou bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
	            },
	            {
	                title: "Blur",
	                selected: false,
	                minimized: false,
	                content: "2nd-level illusion\nCasting Time: 1 action\nRange: Self\nComponents: V\nDuration: Concentration, up to 1 minute\nYour body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this e ect if it doesn\u2019t rely on sight,\nas with blindsight, or can see through illusions, as with truesight."
	            },
	            {
	                title: "Burning Hands",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action Range: Self (15-foot cone) Components: V, S Duration: Instantaneous\nAs you hold your hands with thumbs touching and  ngers spread, a thin sheet of  ames shoots forth from your outstretched  ngertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6  re damage on a failed save, or half as much damage on a successful one.\nThe  re ignites any  ammable objects in the area that aren\u2019t being worn or carried.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.\nChain Lightning\n6th-level evocation\nCasting Time: 1 action\nRange: 150 feet\nComponents: V, S, M (a bit of fur; a piece of amber,\nglass, or a crystal rod; and three silver pins) Duration: Instantaneous\nYou create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the  rst target. A target can be a creature or an object and can be targeted by only one of the bolts.\nA target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.\nAt Higher Levels. When you cast this spell using\na spell slot of 7th level or higher, one additional bolt leaps from the  rst target to another target for each slot level above 6th."
	            },
	            {
	                title: "Charm Person",
	                selected: false,
	                minimized: false,
	                content: "1st-level enchantment\nCasting Time: 1 action Range: 30 feet Components: V, S Duration: 1 hour\nYou attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are  ghting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.\nAt Higher Levels. When you cast this spell using\na spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
	            },
	            {
	                title: "Chill Touch",
	                selected: false,
	                minimized: false,
	                content: "Necromancy cantrip\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S\nDuration: 1 round\n\nYou create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.\n\nIf you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.\n\nThis spell's damage increases by 1d8 when you reach 5th level (2d8). 11th level (3d8), and 17th level (4d8)."
	            },
	            {
	                title: "Command",
	                selected: false,
	                minimized: false,
	                content: "1st-level enchantment\nCasting Time: 1 action Range: 60 feet Components: V Duration: 1 round\nYou speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no e ect if the target is undead, if it doesn\u2019t understand your language, or if your command is directly harmful to it.\nSome typical commands and their e ects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can\u2019t follow your command, the spell ends.\nApproach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.\nDrop. The target drops whatever it is holding and then ends its turn.\nFlee. The target spends its turn moving away from you by the fastest available means.\nGrovel. The target falls prone and then ends its turn.\nHalt. The target doesn\u2019t move and takes no actions. A  ying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it  ies the minimum distance needed to remain in the air.\nAt Higher Levels. When you cast this spell using\na spell slot of 2nd level or higher, you can a ect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
	            },
	            {
	                title: "Commune",
	                selected: false,
	                minimized: false,
	                content: "5th-level divination (ritual)\nCasting Time: 1 minute\nRange: Self\nComponents: V, S, M (incense and a vial of holy or\nunholy water) Duration: 1 minute\nYou contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.\nDivine beings aren\u2019t necessarily omniscient, so you might receive \u201Cunclear\u201D as an answer if a question pertains to information that lies beyond the deity\u2019s knowledge. In a case where a one-word answer could be misleading or contrary to the deity\u2019s interests, the DM might o er a short phrase as an answer instead.\nIf you cast the spell two or more times before  nishing your next long rest, there is a cumulative 25 percent chance for each casting after the  rst that you get no answer. The DM makes this roll in secret."
	            },
	            {
	                title: "Comprehend Languages",
	                selected: false,
	                minimized: false,
	                content: "1st-level divination (ritual)\nCasting Time: 1 action\nRange: Self\nComponents: V, S, M (a pinch of soot and salt) Duration: 1 hour\nFor the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.\nThis spell doesn\u2019t decode secret messages in a text or a glyph, such as an arcane sigil, that isn\u2019t part of a written language."
	            },
	            {
	                title: "Cone of Cold",
	                selected: false,
	                minimized: false,
	                content: "5th-level evocation\nCasting Time: 1 action\nRange: Self (60-foot cone)\nComponents: V, S, M (a small crystal or glass cone) Duration: Instantaneous\nA blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.\nA creature killed by this spell becomes a frozen statue until it thaws.\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
	            },
	            {
	                title: "Counterspell",
	                selected: false,
	                minimized: false,
	                content: "3rd-level abjuration\nCasting Time: 1 reaction, which you take when you see a creature within 60 feet of you casting a spell\nRange: 60 feet Components: S Duration: Instantaneous\nYou attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no e ect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell\u2019s level. On a success, the creature\u2019s spell fails and has no e ect.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no e ect if its level is less than or equal to the level of the spell slot you used."
	            },
	            {
	                title: "Crown of Madness",
	                selected: false,
	                minimized: false,
	                content: "2nd-level enchantment\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S\nDuration: Concentration, up to 1 minute\n\nOne humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.\n\nThe charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose.\n\nThe target can act normally on its turn if you choose no creature or if none are within its reach.\n\nOn your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
	            },
	            {
	                title: "Cure Wounds",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nA creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modi er. This spell has no e ect on undead or constructs.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
	            },
	            {
	                title: "Dancing Lights",
	                selected: false,
	                minimized: false,
	                content: "Evocation cantrip\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S, M (a bit of phosphorus or wychwood,\nor a glowworm)\nDuration: Concentration, up to 1 minute\nYou create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.\nAs a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell\u2019s range."
	            },
	            {
	                title: "Darkness",
	                selected: false,
	                minimized: false,
	                content: "2nd-level evocation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, M (bat fur and a drop of pitch or\npiece of coal)\nDuration: Concentration, up to 10 minutes\nMagical darkness spreads from a point you choose within range to  ll a 15-foot-radius sphere for the duration. The darkness spreads around corners.\nA creature with darkvision can\u2019t see through this darkness, and nonmagical light can\u2019t illuminate it.\nIf the point you choose is on an object you are holding or one that isn\u2019t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.\nIf any of this spell\u2019s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
	            },
	            {
	                title: "Death Ward",
	                selected: false,
	                minimized: false,
	                content: "4th-level abjuration\nCasting Time: 1 action Range: Touch Components: V, S Duration: 8 hours\nYou touch a creature and grant it a measure of protection from death.\nThe  rst time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.\nIf the spell is still in e ect when the target is subjected to an e ect that would kill it instantaneously without dealing damage, that e ect is instead negated against the target, and the spell ends."
	            },
	            {
	                title: "Delayed Blast Fireball",
	                selected: false,
	                minimized: false,
	                content: "7th-level evocation\nCasting Time: 1 action\nRange: 150 feet\nComponents: V, S, M (a tiny ball of bat\nguano and sulfur)\nDuration: Concentration, up to 1 minute\nA beam of yellow light  ashes from your pointing  nger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of  ame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes  re damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.\nThe spell\u2019s base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.\nIf the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in  ame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.\nThe  re damages objects in the area and ignites  ammable objects that aren\u2019t being worn or carried.\nAt Higher Levels. When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
	            },
	            {
	                title: "Detect Magic",
	                selected: false,
	                minimized: false,
	                content: "1st-level divination (ritual)\nCasting Time: 1 action\nRange: Self\nComponents: V, S\nDuration: Concentration, up to 10 minutes\nFor the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
	            },
	            {
	                title: "Dimension Door",
	                selected: false,
	                minimized: false,
	                content: "4th-level conjuration\nCasting Time: 1 action Range: 500 feet Components: V Duration: Instantaneous\nYou teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \u201C200 feet straight downward\u201D or \u201Cupward to the northwest at a 45-degree angle, 300 feet.\u201D\nYou can bring along objects as long as their weight doesn\u2019t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.\nIf you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."
	            },
	            {
	                title: "Disguise Self",
	                selected: false,
	                minimized: false,
	                content: "1st-level illusion\nCasting Time: 1 action Range: Self Components: V, S Duration: 1 hour\nYou make yourself\u2014including your clothing, armor, weapons, and other belongings on your person\u2014look di erent until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can\u2019t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your out t, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.\nTo discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.\n"
	            },
	            {
	                title: "Disintegrate",
	                selected: false,
	                minimized: false,
	                content: "6th-level transmutation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a lodestone and a pinch of dust) Duration: Instantaneous\nA thin green ray springs from your pointing  nger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.\nA creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated.\nA disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of  ne gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.\nThis spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is una ected by this spell.\nAt Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."
	            },
	            {
	                title: "Dispel Magic",
	                selected: false,
	                minimized: false,
	                content: "3rd-level abjuration\nCasting Time: 1 action Range: 120 feet Components: V, S Duration: Instantaneous\nChoose one creature, object, or magical e ect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The\nDC equals 10 + the spell\u2019s level. On a successful check, the spell ends.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you automatically end the e ects of a spell on the target if the spell\u2019s level is equal to or less than the level of the spell slot you used."
	            },
	            {
	                title: "Divination",
	                selected: false,
	                minimized: false,
	                content: "4th-level divination (ritual)\nCasting Time: 1 action\nRange: Self\nComponents: V, S, M (incense and a sacri cial o ering\nappropriate to your religion, together worth at least 25\ngp, which the spell consumes) Duration: Instantaneous\nYour magic and an o ering put you in contact with\na god or a god\u2019s servants. You ask a single question concerning a speci c goal, event, or activity to occur within 7 days. The DM o ers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.\nThe spell doesn\u2019t take into account any possible circumstances that might change the outcome, such\nas the casting of additional spells or the loss or gain of a companion.\nIf you cast the spell two or more times before  nishing your next long rest, there is a cumulative 25 percent chance for each casting after the  rst that you get a random reading. The DM makes this roll in secret."
	            },
	            {
	                title: "Dominate Monster",
	                selected: false,
	                minimized: false,
	                content: "8th-level enchantment\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S\nDuration: Concentration, up to 1 hour\nYou attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are  ghting it, it has advantage on the saving throw.\nWhile the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \u201CAttack that creature,\u201D \u201CRun over there,\u201D or \u201CFetch that object.\u201D If the creature completes the order and doesn\u2019t receive further direction from you, it defends and preserves itself to the best of its ability.\nYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn\u2019t do anything that you don\u2019t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\nEach time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.\nAt Higher Levels. When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours.\n"
	            },
	            {
	                title: "Dominate Person",
	                selected: false,
	                minimized: false,
	                content: "5th-level enchantment\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S\nDuration: Concentration, up to 1 minute\nYou attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are  ghting it, it has advantage on the saving throw.\nWhile the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \u201CAttack that creature,\u201D \u201CRun over there,\u201D or \u201CFetch that object.\u201D If the creature completes the order and doesn\u2019t receive further direction from you, it defends and preserves itself to the best of its ability.\nYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn\u2019t do anything that you don\u2019t allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\nEach time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.\nAt Higher Levels. When you cast this spell using\na 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
	            },
	            {
	                title: "Dream",
	                selected: false,
	                minimized: false,
	                content: "5th-level illusion\nCasting Time: 1 minute\nRange: Special\nComponents: V, S, M (a handful of sand, a dab of ink,\nand a writing quill plucked from a sleeping bird) Duration: 8 hours\nThis spell shapes a creature\u2019s dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don\u2019t sleep, such as elves, can\u2019t be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can\u2019t take actions or move.\nIf the target is asleep, the messenger appears in the target\u2019s dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the e ect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target\u2019s dreams.\nYou can make the messenger appear monstrous\nand terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target\u2019s sleep and prevents the target from gaining any bene t from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.\nIf you have a body part, lock of hair, clipping from a nail, or similar portion of the target\u2019s body, the target makes its saving throw with disadvantage."
	            },
	            {
	                title: "Earthquake",
	                selected: false,
	                minimized: false,
	                content: "8th-level evocation\nCasting Time: 1 action\nRange: 500 feet\nComponents: V, S, M (a pinch of dirt, a piece of rock,\nand a lump of clay)\nDuration: Concentration, up to 1 minute\nYou create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground\nin that area.\nThe ground in the area becomes di cult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature\u2019s concentration is broken.\nWhen you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.\nThis spell can have additional e ects depending on the terrain in the area, as determined by the DM.\nFissures. Fissures open throughout the spell\u2019s area at the start of your next turn after you cast the spell. A total of 1d6 such  ssures open in locations chosen by the DM. Each is 1d10 \u00D7 10 feet deep, 10 feet wide, and extends from one edge of the spell\u2019s area to the opposite side.\nA creature standing on a spot where a  ssure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the  ssure\u2019s edge as it opens.\nA  ssure that opens beneath a structure causes it to automatically collapse (see below).\nStructures. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure\u2019s height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher\nor lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn\u2019t fall prone or become buried."
	            },
	            {
	                title: "Etherealness",
	                selected: false,
	                minimized: false,
	                content: "7th-level transmutation\nCasting Time: 1 action Range: Self Components: V, S Duration: Up to 8 hours\nYou step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. \nYou can see and hear the plane you originated from, but everything there looks gray, and you can\u2019t see anything more than 60 feet away.\nWhile on the Ethereal Plane, you can only a ect and be a ected by other creatures on that plane. Creatures that aren\u2019t on the Ethereal Plane can\u2019t perceive you and can\u2019t interact with you, unless a special ability or magic has given them the ability to do so.\nYou ignore all objects and e ects that aren\u2019t on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.\nWhen the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.\nThis spell has no e ect if you cast it while you are on the Ethereal Plane or a plane that doesn\u2019t border it, such as one of the Outer Planes.\nAt Higher Levels. When you cast this spell using\na spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
	            },
	            {
	                title: "False Life",
	                selected: false,
	                minimized: false,
	                content: "1st-level necromancy\nCasting Time: 1 action\nRange: Self\nComponents: V, S, M 9a small amount of alcohol or distilled spirits)\nDuration: 1 hour\n\nBolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
	            },
	            {
	                title: "Find the Path",
	                selected: false,
	                minimized: false,
	                content: "6th-level divination\nCasting Time: 1 minute\nRange: Self\nComponents: V, S, M (a set of divinatory tools\u2014such\nas bones, ivory sticks, cards, teeth, or carved runes\u2014 worth 100 gp and an object from the location you wish to  nd)\nDuration: Concentration, up to 1 day\nThis spell allows you to  nd the shortest, most direct physical route to a speci c  xed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn\u2019t speci c (such as \u201Ca green dragon\u2019s lair\u201D), the spell fails.\nFor the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
	            },
	            {
	                title: "Faerie Fire",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V\nDuration: Concentration, up to 1 minute\nEach object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if\nit fails a Dexterity saving throw. For the duration, objects and a ected creatures shed dim light in a 10-foot radius.\nAny attack roll against an a ected creature or object has advantage if the attacker can see it, and the a ected creature or object can\u2019t bene t from being invisible."
	            },
	            {
	                title: "Finger of Death",
	                selected: false,
	                minimized: false,
	                content: "7th-level necromancy\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nYou send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.\nA humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
	            },
	            {
	                title: "Fireball",
	                selected: false,
	                minimized: false,
	                content: "3rd-level evocation\nCasting Time: 1 action\nRange: 150 feet\nComponents: V, S, M (a tiny ball of bat\nguano and sulfur) Duration: Instantaneous\nA bright streak  ashes from your pointing  nger to a point you choose within range and then blossoms with a low roar into an explosion of  ame. Each creature\nin a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6  re damage on a failed save, or half as much damage on a successful one.\nThe  re spreads around corners. It ignites  ammable objects in the area that aren\u2019t being worn or carried.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.\nFire Bolt\nEvocation cantrip\nCasting Time: 1 action Range: 120 feet Components: V, S Duration: Instantaneous\nYou hurl a mote of  re at a creature or object within range. Make a ranged spell attack against the\ntarget. On a hit, the target takes 1d10  re damage. A  ammable object hit by this spell ignites if it isn\u2019t being worn or carried.\nThis spell\u2019s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
	            },
	            {
	                title: "Fire Storm",
	                selected: false,
	                minimized: false,
	                content: "7th-level evocation\nCasting Time: 1 action Range: 150 feet Components: V, S Duration: Instantaneous\nA storm made up of sheets of roaring  ame appears\nin a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10  re damage on a failed save, or half as much damage on a successful one.\nThe  re damages objects in the area and ignites  ammable objects that aren\u2019t being worn or carried. If you choose, plant life in the area is una ected\nby this spell."
	            },
	            {
	                title: "Flame Strike",
	                selected: false,
	                minimized: false,
	                content: "5th-level evocation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (pinch of sulfur) Duration: Instantaneous\nA vertical column of divine  re roars down from the heavens in a location you specify. Each creature in\na 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6  re damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the  re damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
	            },
	            {
	                title: "Flaming Sphere",
	                selected: false,
	                minimized: false,
	                content: "2nd-level conjuration\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a bit of tallow, a pinch of\nbrimstone, and a dusting of powdered iron) Duration: Concentration, up to 1 minute\nA 5-foot-diameter sphere of  re appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6  re damage on a failed save, or half as much damage on a successful one.\nAs a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere\u2019s damage, and the sphere stops moving this turn.\nWhen you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites  ammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
	            },
	            {
	                title: "Fly",
	                selected: false,
	                minimized: false,
	                content: "3rd-level transmutation\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a wing feather from any bird) Duration: Concentration, up to 10 minutes\nYou touch a willing creature. The target gains a  ying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
	            },
	            {
	                title: "Foresight",
	                selected: false,
	                minimized: false,
	                content: "9th-level divination\nCasting Time: 1 minute\nRange: Touch\nComponents: V, S, M (a hummingbird feather) Duration: 8 hours\nYou touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can\u2019t be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.\nThis spell immediately ends if you cast it again before its duration ends."
	            },
	            {
	                title: "Freedom of Movement",
	                selected: false,
	                minimized: false,
	                content: "4th-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a leather strap, bound around the\narm or a similar appendage) Duration: 1 hour\nYou touch a willing creature. For the duration, the target\u2019s movement is una ected by di cult terrain, and spells and other magical e ects can neither reduce\nthe target\u2019s speed nor cause the target to be paralyzed or restrained.\nThe target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target\u2019s movement or attacks."
	            },
	            {
	                title: "Gate",
	                selected: false,
	                minimized: false,
	                content: "9th-level conjuration\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a diamond worth at least 5,000 gp) Duration: Concentration, up to 1 minute\nYou conjure a portal linking an unoccupied space you can see within range to a precise location on a di erent plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.\nThe portal has a front and a back on each plane where it appears. Travel through the portal is possible only\nby moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.\nDeities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.\nWhen you cast this spell, you can speak the name\nof a speci c creature (a pseudonym, title, or nickname doesn\u2019t work). If that creature is on a plane other than the one you are on, the portal opens in the named creature\u2019s immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you."
	            },
	            {
	                title: "Globe of Invulnerability",
	                selected: false,
	                minimized: false,
	                content: "6th-level abjuration\nCasting Time: 1 action\nRange: Self (10-foot radius)\nComponents: V, S, M (a glass or crystal bead that\nshatters when the spell ends) Duration: Concentration, up to 1 minute\nAn immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.\nAny spell of 5th level or lower cast from outside the barrier can\u2019t a ect creatures or objects within it, even\nif the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no e ect on them. Similarly, the area within the barrier is excluded from the areas a ected by such spells.\nAt Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
	            },
	            {
	                title: "Greater Invisibility",
	                selected: false,
	                minimized: false,
	                content: "4th-level illusion\nCasting Time: 1 action\nRange: Touch\nComponents: V, S\nDuration: Concentration, up to 1 minute\nYou or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target\u2019s person."
	            },
	            {
	                title: "Greater Restoration",
	                selected: false,
	                minimized: false,
	                content: "5th-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (diamond dust worth at least 100\ngp, which the spell consumes) Duration: Instantaneous\nYou imbue a creature you touch with positive energy to undo a debilitating e ect. You can reduce the target\u2019s\nexhaustion level by one, or end one of the following e ects on the target:\n\u2022 One e ect that charmed or petri ed the target\n\u2022 One curse, including the target\u2019s attunement to a\ncursed magic item\n\u2022 Any reduction to one of the target\u2019s ability scores\n\u2022 One e ect reducing the target\u2019s hit point maximum"
	            },
	            {
	                title: "Guardian of Faith",
	                selected: false,
	                minimized: false,
	                content: "4th-level conjuration\nCasting Time: 1 action Range: 30 feet Components: V Duration: 8 hours\nA Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.\nAny creature hostile to you that moves to a space within 10 feet of the guardian for the  rst time on a\nturn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
	            },
	            {
	                title: "Guidance",
	                selected: false,
	                minimized: false,
	                content: "Divination cantrip\nCasting Time: 1 action\nRange: Touch\nComponents: V, S\nDuration: Concentration, up to 1 minute\nYou touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
	            },
	            {
	                title: "Guiding Bolt",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action Range: 120 feet Components: V, S Duration: 1 round\nA  ash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	            },
	            {
	                title: "Harm",
	                selected: false,
	                minimized: false,
	                content: "6th-level necromancy\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nYou unleash a virulent disease on a creature that\nyou can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can\u2019t reduce the target\u2019s hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any e ect that removes a disease allows a creature\u2019s hit point maximum to return to normal before that time passes."
	            },
	            {
	                title: "Haste",
	                selected: false,
	                minimized: false,
	                content: "3rd-level transmutation\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S, M (a shaving of licorice root) Duration: Concentration, up to 1 minute\nChoose a willing creature that you can see within range. Until the spell ends, the target\u2019s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.\nWhen the spell ends, the target can\u2019t move or take actions until after its next turn, as a wave of lethargy sweeps over it."
	            },
	            {
	                title: "Heal",
	                selected: false,
	                minimized: false,
	                content: "6th-level evocation\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nChoose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases a ecting the target. This spell has no e ect on constructs or undead.\nAt Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th."
	            },
	            {
	                title: "Healing Word",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 bonus action Range: 60 feet\nComponents: V\nDuration: Instantaneous\nA creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modi er. This spell has no e ect on undead\nor constructs.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
	            },
	            {
	                title: "Heroes??? Feast",
	                selected: false,
	                minimized: false,
	                content: "6th-level conjuration\nCasting Time: 10 minutes\nRange: 30 feet\nComponents: V, S , M (a gem-encrusted bowl worth at\nleast 1,000 gp, which the spell consumes) Duration: Instantaneous\nYou bring forth a great feast, including magni cent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the bene cial e ects don\u2019t set in until this hour is over. Up to twelve other creatures can partake of the feast.\nA creature that partakes of the feast gains several bene ts. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These bene ts last for 24 hours."
	            },
	            {
	                title: "Hold Person",
	                selected: false,
	                minimized: false,
	                content: "2nd-level enchantment\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a small, straight piece of iron) Duration: Concentration, up to 1 minute\nChoose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.\nAt Higher Levels. When you cast this spell using\na spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
	            },
	            {
	                title: "Holy Aura",
	                selected: false,
	                minimized: false,
	                content: "8th-level abjuration\nCasting Time: 1 action\nRange: Self\nComponents: V, S, M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint\u2019s robe or a piece of parchment from a religious text)\nDuration: Concentration, up to 1 minute\nDivine light washes out from you and coalesces\nin a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a  end or an undead hits an a ected creature with a melee attack, the aura  ashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends."
	            },
	            {
	                title: "Ice Storm",
	                selected: false,
	                minimized: false,
	                content: "4th-level evocation\nCasting Time: 1 action\nRange: 300 feet\nComponents: V, S, M (a pinch of dust and a few\ndrops of water) Duration: Instantaneous\nA hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.\nHailstones turn the storm\u2019s area of e ect into di cult terrain until the end of your next turn.\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
	            },
	            {
	                title: "Identify",
	                selected: false,
	                minimized: false,
	                content: "1st-level divination (ritual)\nCasting Time: 1 minute\nRange: Touch\nComponents: V, S, M (a pearl worth at least 100 gp and\nan owl feather) Duration: Instantaneous\nYou choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are a ecting the item and what they are. If the item was created by a spell, you learn which spell created it.\nIf you instead touch a creature throughout the casting, you learn what spells, if any, are currently a ecting it."
	            },
	            {
	                title: "Imprisonment",
	                selected: false,
	                minimized: false,
	                content: "9th-level abjuration\nCasting Time: 1 minute\nRange: 30 feet\nComponents: V, S, M (a vellum depiction or a carved\nstatuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die\nof the target)\nDuration: Until dispelled\nYou create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While a ected by this spell, the creature doesn\u2019t need to breathe, eat, or drink, and it doesn\u2019t age. Divination spells can\u2019t locate or perceive the target.\nWhen you cast the spell, you choose one of the following forms of imprisonment.\nBurial. The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.\nThe special component for this version of the spell is a small mithral orb.\nChaining. Heavy chains,  rmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can\u2019t move or be moved by any means until then.\nThe special component for this version of the spell is a  ne chain of precious metal.\nHedged Prison. The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar con ned structure or area of your choice.\nThe special component for this version of the spell is a miniature representation of the prison made from jade.\nMinimus Containment. The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can\u2019t be cut or broken while the spell remains in e ect.\nThe special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.\nSlumber. The target falls asleep and can\u2019t be awoken. The special component for this version of the spell consists of rare sopori c herbs.\nEnding the Spell. During the casting of the spell,\nin any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as speci c or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature\u2019s name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.\nA dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.\nYou can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the  rst casting is immediately freed from its binding."
	            },
	            {
	                title: "Inflict Wounds",
	                selected: false,
	                minimized: false,
	                content: "1st-level necromancy\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nMake a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.\n"
	            },
	            {
	                title: "Invisibility",
	                selected: false,
	                minimized: false,
	                content: "2nd-level illusion\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (an eyelash encased\nin gum arabic)\nDuration: Concentration, up to 1 hour\nA creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target\u2019s person. The spell ends for a target that attacks or casts a spell.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
	            },
	            {
	                title: "Knock",
	                selected: false,
	                minimized: false,
	                content: "2nd-level transmutation\nCasting Time: 1 action Range: 60 feet Components: V Duration: Instantaneous\nChoose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.\nA target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.\nIf you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.\nWhen you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
	            },
	            {
	                title: "Lesser Restoration",
	                selected: false,
	                minimized: false,
	                content: "2nd-level abjuration\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nYou touch a creature and can end either one disease or one condition a icting it. The condition can be blinded, deafened, paralyzed, or poisoned."
	            },
	            {
	                title: "Levitate",
	                selected: false,
	                minimized: false,
	                content: "2nd-level transmutation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (either a small leather loop or a\npiece of golden wire bent into a cup shape with a long\nshank on one end)\nDuration: Concentration, up to 10 minutes\nOne creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is una ected.\nThe target can move only by pushing or pulling against a  xed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target\u2019s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell\u2019s range.\nWhen the spell ends, the target  oats gently to the ground if it is still aloft."
	            },
	            {
	                title: "Light",
	                selected: false,
	                minimized: false,
	                content: "Evocation cantrip\nCasting Time: 1 action\nRange: Touch\nComponents: V, M (a  re y or phosphorescent moss) Duration: 1 hour\nYou touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it\nas an action.\nIf you target an object held or worn by a hostile\ncreature, that creature must succeed on a Dexterity saving throw to avoid the spell."
	            },
	            {
	                title: "Lightning Bolt",
	                selected: false,
	                minimized: false,
	                content: "3rd-level evocation\nCasting Time: 1 action\nRange: Self (100-foot line)\nComponents: V, S, M (a bit of fur and a rod of amber,\ncrystal, or glass) Duration: Instantaneous\nA stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites  ammable objects in the area\nthat aren\u2019t being worn or carried.\nAt Higher Levels. When you cast this spell using a\nspell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
	            },
	            {
	                title: "Locate Creature",
	                selected: false,
	                minimized: false,
	                content: "4th-level divination\nCasting Time: 1 action\nRange: Self\nComponents: V, S, M (a bit of fur from a bloodhound) Duration: Concentration, up to 1 hour\nDescribe or name a creature that is familiar to you. You sense the direction to the creature\u2019s location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\nThe spell can locate a speci c creature known to you, or the nearest creature of a speci c kind (such as a human or a unicorn), so long as you have seen such a creature up close\u2014within 30 feet\u2014at least once. If the creature you described or named is in a di erent form, such as being under the e ects of a polymorph spell, this spell doesn\u2019t locate the creature.\nThis spell can\u2019t locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
	            },
	            {
	                title: "Mage Armor",
	                selected: false,
	                minimized: false,
	                content: "1st-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a piece of cured leather) Duration: 8 hours\nYou touch a willing creature who isn\u2019t wearing armor, and a protective magical force surrounds it until the spell ends. The target\u2019s base AC becomes 13 + its Dexterity modi er. The spell ends if the target dons armor or if you dismiss the spell as an action.\nMage Hand\nConjuration cantrip\nCasting Time: 1 action Range: 30 feet Components: V, S Duration: 1 minute\nA spectral,  oating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\nYou can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.\nThe hand can\u2019t attack, activate magic items, or carry more than 10 pounds."
	            },
	            {
	                title: "Magic Missile",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action Range: 120 feet Components: V, S Duration: Instantaneous\nYou create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
	            },
	            {
	                title: "Magic Weapon",
	                selected: false,
	                minimized: false,
	                content: "2nd-level transmutation\nCasting Time: 1 bonus action\nRange: Touch\nComponents: V, S\nDuration: Concentration, up to 1 hour\nYou touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
	            },
	            {
	                title: "Major Image",
	                selected: false,
	                minimized: false,
	                content: "3rd-level illusion\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S, M (a bit of  eece) Duration: Concentration, up to 10 minutes\nYou create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you\ncan see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can\u2019t create su cient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte\u2019s stench).\nAs long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make di erent sounds at di erent times, even making it carry on a conversation, for example.\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
	            },
	            {
	                title: "Mass Cure Wounds",
	                selected: false,
	                minimized: false,
	                content: "5th-level conjuration\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nA wave of healing energy washes out from a point of your choice within range. Choose up to six creatures\nin a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modi er. This spell has no e ect on undead\nor constructs.\nAt Higher Levels. When you cast this spell using a\nspell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.\n9th-level conjuration\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nA  ood of healing energy  ows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any e ect making them blinded or deafened. This spell has no e ect on undead or constructs."
	            },
	            {
	                title: "Mass Healing Word",
	                selected: false,
	                minimized: false,
	                content: "3rd-level evocation\nCasting Time: 1 bonus action Range: 60 feet\nComponents: V\nDuration: Instantaneous\nAs you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modi er. This spell has no e ect on undead or constructs.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd."
	            },
	            {
	                title: "Mass Suggestion",
	                selected: false,
	                minimized: false,
	                content: "6th-level enchantment\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, M (a snake\u2019s tongue and either a bit of\nhoneycomb or a drop of sweet oil) Duration: 24 hours\nYou suggest a course of activity (limited to a sentence\nor two) and magically in uence up to twelve creatures\nof your choice that you can see within range and that can hear and understand you. Creatures that can\u2019t be charmed are immune to this e ect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the e ect of the spell.\nEach target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject  nishes what it was asked to do.\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the  rst beggar they meet. If the condition isn\u2019t met before the spell ends, the activity isn\u2019t performed.\nIf you or any of your companions damage a creature a ected by this spell, the spell ends for that creature.\nAt Higher Levels. When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
	            },
	            {
	                title: "Maze",
	                selected: false,
	                minimized: false,
	                content: "8th-level conjuration\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S\nDuration: Concentration, up to 10 minutes\nYou banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.\nThe target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).\nWhen the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space."
	            },
	            {
	                title: "Meteor Swarm",
	                selected: false,
	                minimized: false,
	                content: "9th-level evocation\nCasting Time: 1 action Range: 1 mile Components: V, S Duration: Instantaneous\nBlazing orbs of  re plummet to the ground at four di erent points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6  re damage and 20d6 bludgeoning damage on a failed\nsave, or half as much damage on a successful one. A creature in the area of more than one  ery burst is a ected only once.\nThe spell damages objects in the area and ignites  ammable objects that aren\u2019t being worn or carried."
	            },
	            {
	                title: "Minor Illusion",
	                selected: false,
	                minimized: false,
	                content: "Illusion cantrip\nCasting Time: 1 action\nRange: 30 feet\nComponents: S, M (a bit of  eece) Duration: 1 minute\nYou create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else\u2019s voice, a lion\u2019s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at di erent times before the spell ends.\nIf you create an image of an object\u2014such as a chair, muddy footprints, or a small chest\u2014it must be no larger than a 5-foot cube. The image can\u2019t create sound, light, smell, or any other sensory e ect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.\nIf a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to\nthe creature."
	            },
	            {
	                title: "Misty Step",
	                selected: false,
	                minimized: false,
	                content: "2nd-level conjuration\nCasting Time: 1 bonus action Range: Self\nComponents: V\nDuration: Instantaneous\nBrie y surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
	            },
	            {
	                title: "Mordenkainen???s Sword",
	                selected: false,
	                minimized: false,
	                content: "7th-level evocation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a miniature platinum sword with\na grip and pommel of copper and zinc, worth 250 gp) Duration: Concentration, up to 1 minute\nYou create a sword-shaped plane of force that hovers within range. It lasts for the duration.\nWhen the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a di erent one."
	            },
	            {
	                title: "Otto???s Irresistible Dance",
	                selected: false,
	                minimized: false,
	                content: "6th-level enchantment\nCasting Time: 1 action\nRange: 30 feet\nComponents: V\nDuration: Concentration, up to 1 minute\nChoose one creature that you can see within range. The target begins a comic dance in place: shu ing, tapping its feet, and capering for the duration. Creatures that can\u2019t be charmed are immune to this spell.\nA dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is a ected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends."
	            },
	            {
	                title: "Passwall",
	                selected: false,
	                minimized: false,
	                content: "5th-level transmutation\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, S, M (a pinch of sesame seeds) Duration: 1 hour\nA passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as\na wall, a ceiling, or a  oor) within range, and lasts for the duration. You choose the opening\u2019s dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.\nWhen the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.\nPoison Spray\nConjuration cantrip\nCasting Time: 1 action Range: 10 feet Components: V, S Duration: Instantaneous\nYou extend your hand toward a creature you can see within range and project a pu  of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.\nThis spell\u2019s damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
	            },
	            {
	                title: "Power Word Kill",
	                selected: false,
	                minimized: false,
	                content: "9th-level enchantment\nCasting Time: 1 action Range: 60 feet Components: V Duration: Instantaneous\nYou utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no e ect."
	            },
	            {
	                title: "Power Word Stun",
	                selected: false,
	                minimized: false,
	                content: "8th-level enchantment\nCasting Time: 1 action Range: 60 feet Components: V Duration: Instantaneous\nYou speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no e ect.\nThe stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning e ect ends."
	            },
	            {
	                title: "Prayer of Healing",
	                selected: false,
	                minimized: false,
	                content: "2nd-level evocation\nCasting Time: 10 minutes Range: 30 feet Components: V Duration: Instantaneous\nUp to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modi er. This spell has no e ect on undead or constructs.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.\nPrestidigitation\nTransmutation cantrip\nCasting Time: 1 action Range: 10 feet Components: V, S Duration: Up to 1 hour\nThis spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical e ects within range:\n\u2022 You create an instantaneous, harmless sensory e ect, such as a shower of sparks, a pu  of wind, faint musi- cal notes, or an odd odor.\n\u2022 You instantaneously light or snu  out a candle, a torch, or a small camp re.\n\u2022 You instantaneously clean or soil an object no larger than 1 cubic foot.\n\u2022 You chill, warm, or  avor up to 1 cubic foot of nonliv- ing material for 1 hour.\n\u2022 You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\n\u2022 You create a nonmagical trinket or an illusory image that can  t in your hand and that lasts until the end of your next turn.\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous e ects active at a time, and you can dismiss such an e ect as an action."
	            },
	            {
	                title: "Protection from Energy",
	                selected: false,
	                minimized: false,
	                content: "3rd-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S\nDuration: Concentration, up to 1 hour\nFor the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold,  re, lightning, or thunder."
	            },
	            {
	                title: "Raise Dead",
	                selected: false,
	                minimized: false,
	                content: "5th-level necromancy\nCasting Time: 1 hour\nRange: Touch\nComponents: V, S, M (a diamond worth at least 500 gp,\nwhich the spell consumes) Duration: Instantaneous\nYou return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature\u2019s soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.\nThis spell also neutralizes any poisons and cures nonmagical diseases that a ected the creature at the time it died. This spell doesn\u2019t, however, remove magical diseases, curses, or similar e ects; if these aren\u2019t  rst removed prior to casting the spell, they take e ect when the creature returns to life. The spell can\u2019t return an undead creature to life.\nThis spell closes all mortal wounds, but it doesn\u2019t restore missing body parts. If the creature is lacking body parts or organs integral for its survival\u2014its head, for instance\u2014the spell automatically fails.\nComing back from the dead is an ordeal. The target takes a \u22124 penalty to all attack rolls, saving throws, and ability checks. Every time the target  nishes a long rest, the penalty is reduced by 1 until it disappears."
	            },
	            {
	                title: "Ray of Frost",
	                selected: false,
	                minimized: false,
	                content: "Evocation cantrip\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nA frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.\nThe spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	            },
	            {
	                title: "Ray of Sickness",
	                selected: false,
	                minimized: false,
	                content: "1st-level necromancy\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S\nDuration: Instantaneous\n\nA ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
	            },
	            {
	                title: "Regenerate",
	                selected: false,
	                minimized: false,
	                content: "7th-level transmutation\nCasting Time: 1 minute\nRange: Touch\nComponents: V, S, M (a prayer wheel and holy water) Duration: 1 hour\nYou touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).\nThe target\u2019s severed body members ( ngers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit\nto the stump."
	            },
	            {
	                title: "Remove Curse",
	                selected: false,
	                minimized: false,
	                content: "3rd-level abjuration\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nAt your touch, all curses a ecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner\u2019s attunement to the object so it can be removed or discarded."
	            },
	            {
	                title: "Resistance",
	                selected: false,
	                minimized: false,
	                content: "Abjuration cantrip\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a miniature cloak) Duration: Concentration, up to 1 minute\nYou touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll\nthe die before or after making the saving throw. The spell then ends."
	            },
	            {
	                title: "Resurrection",
	                selected: false,
	                minimized: false,
	                content: "7th-level necromancy\nCasting Time: 1 hour\nRange: Touch\nComponents: V, S, M (a diamond worth at least 1,000\ngp, which the spell consumes) Duration: Instantaneous\nYou touch a dead creature that has been dead for no more than a century, that didn\u2019t die of old age, and that isn\u2019t undead. If its soul is free and willing, the target returns to life with all its hit points.\nThis spell neutralizes any poisons and cures normal diseases a icting the creature when it died. It doesn\u2019t, however, remove magical diseases, curses, and the like; if such e ects aren\u2019t removed prior to casting the spell, they a ict the target on its return to life.\nThis spell closes all mortal wounds and restores any missing body parts.\nComing back from the dead is an ordeal. The target takes a \u22124 penalty to all attack rolls, saving throws, and ability checks. Every time the target  nishes a long rest, the penalty is reduced by 1 until it disappears.\nCasting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you  nish a long rest, you can\u2019t cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
	            },
	            {
	                title: "Revivify",
	                selected: false,
	                minimized: false,
	                content: "3rd-level conjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (diamonds worth 300 gp, which\nthe spell consumes) Duration: Instantaneous\nYou touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can\u2019t return to life a creature that has died of old age, nor can it restore any missing body parts."
	            },
	            {
	                title: "Sacred Flame",
	                selected: false,
	                minimized: false,
	                content: "Evocation cantrip\nCasting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous\nFlame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no bene t from cover for this saving throw.\nThe spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	            },
	            {
	                title: "Sanctuary",
	                selected: false,
	                minimized: false,
	                content: "1st-level abjuration\nCasting Time: 1 bonus action\nRange: 30 feet\nComponents: V, S, M (a small silver mirror) Duration: 1 minute\nYou ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must  rst make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn\u2019t protect the warded creature from area e ects, such as the explosion of a  reball.\nIf the warded creature makes an attack or casts a spell that a ects an enemy creature, this spell ends."
	            },
	            {
	                title: "Shatter",
	                selected: false,
	                minimized: false,
	                content: "2nd-level evocation\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a chip of mica) Duration: Instantaneous\nA sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.\nA nonmagical object that isn\u2019t being worn or carried also takes the damage if it\u2019s in the spell\u2019s area.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
	            },
	            {
	                title: "Shield",
	                selected: false,
	                minimized: false,
	                content: "1st-level abjuration\nCasting Time: 1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell\nRange: Self Components: V, S Duration: 1 round\nAn invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
	            },
	            {
	                title: "Shield of Faith",
	                selected: false,
	                minimized: false,
	                content: "1st-level abjuration\nCasting Time: 1 bonus action\nRange: 60 feet\nComponents: V, S, M (a small parchment with a bit of\nholy text written on it)\nDuration: Concentration, up to 10 minutes\nA shimmering  eld appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
	            },
	            {
	                title: "Shocking Grasp",
	                selected: false,
	                minimized: false,
	                content: "Evocation cantrip\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nLightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can\u2019t take reactions until the start of its next turn.\nThe spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	            },
	            {
	                title: "Silence",
	                selected: false,
	                minimized: false,
	                content: "2nd-level illusion (ritual)\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S\nDuration: Concentration, up to 10 minutes\nFor the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
	            },
	            {
	                title: "Silent Image",
	                selected: false,
	                minimized: false,
	                content: "1st-level illusion\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a bit of  eece) Duration: Concentration, up to 10 minutes\nYou create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn\u2019t accompanied by sound, smell, or other sensory e ects.\nYou can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
	            },
	            {
	                title: "Sleep",
	                selected: false,
	                minimized: false,
	                content: "1st-level enchantment\nCasting Time: 1 action\nRange: 90 feet\nComponents: V, S, M (a pinch of  ne sand, rose petals,\nor a cricket) Duration: 1 minute\nThis spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can a ect. Creatures within 20 feet of\na point you choose within range are a ected in ascending order of their current hit points (ignoring unconscious creatures).\nStarting with the creature that has the lowest current hit points, each creature a ected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature\u2019s hit points from the total before moving on to the creature with the next lowest hit points. A creature\u2019s hit points must be equal to or less than the remaining total for that creature to be a ected.\nUndead and creatures immune to being charmed aren\u2019t a ected by this spell.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
	            },
	            {
	                title: "Spare the Dying",
	                selected: false,
	                minimized: false,
	                content: "Necromancy cantrip\nCasting Time: 1 action Range: Touch Components: V, S Duration: Instantaneous\nYou touch a living creature that has 0 hit points. The creature becomes stable. This spell has no e ect on undead or constructs."
	            },
	            {
	                title: "Speak with Dead",
	                selected: false,
	                minimized: false,
	                content: "3rd-level necromancy\nCasting Time: 1 action\nRange: 10 feet\nComponents: V, S, M (burning incense) Duration: 10 minutes\nYou grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can\u2019t be undead. The spell fails if the corpse was the target of this spell within the last 10 days.\nUntil the spell ends, you can ask the corpse up to  ve questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to o er a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn\u2019t return the creature\u2019s soul to its body, only its animating spirit. Thus, the corpse can\u2019t learn new information, doesn\u2019t comprehend anything that has happened since it died, and can\u2019t speculate about future events."
	            },
	            {
	                title: "Spider Climb",
	                selected: false,
	                minimized: false,
	                content: "2nd-level transmutation\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a drop of bitumen and a spider) Duration: Concentration, up to 1 hour\nUntil the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
	            },
	            {
	                title: "Spirit Guardians",
	                selected: false,
	                minimized: false,
	                content: "3rd-level conjuration\nCasting Time: 1 action\nRange: Self (15-foot radius)\nComponents: V, S, M (a holy symbol) Duration: Concentration, up to 10 minutes\nYou call forth spirits to protect you. They  it around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear  endish.\nWhen you cast this spell, you can designate any number of creatures you can see to be una ected by it. An a ected creature\u2019s speed is halved in the area, and when the creature enters the area for the  rst time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
	            },
	            {
	                title: "Spiritual Weapon",
	                selected: false,
	                minimized: false,
	                content: "2nd-level evocation\nCasting Time: 1 bonus action Range: 60 feet\nComponents: V, S\nDuration: 1 minute\nYou create a  oating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modi er.\nAs a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.\nThe weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell\u2019s e ect resemble that weapon.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd."
	            },
	            {
	                title: "Stoneskin",
	                selected: false,
	                minimized: false,
	                content: "4th-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (diamond dust worth 100 gp,\nwhich the spell consumes) Duration: Concentration, up to 1 hour\nThis spell turns the  esh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
	            },
	            {
	                title: "Suggestion",
	                selected: false,
	                minimized: false,
	                content: "2nd-level enchantment\nCasting Time: 1 action\nRange: 30 feet\nComponents: V, M (a snake\u2019s tongue and either a bit of\nhoneycomb or a drop of sweet oil) Duration: Concentration, up to 8 hours\nYou suggest a course of activity (limited to a sentence\nor two) and magically in uence a creature you can\nsee within range that can hear and understand you. Creatures that can\u2019t be charmed are immune to this e ect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto\na spear, immolate itself, or do some other obviously harmful act ends the spell.\nThe target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject  nishes what it was asked to do.\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the  rst beggar she meets. If the condition isn\u2019t met before the spell expires, the activity isn\u2019t performed.\nIf you or any of your companions damage the target, the spell ends."
	            },
	            {
	                title: "Sunburst",
	                selected: false,
	                minimized: false,
	                content: "8th-level evocation\nCasting Time: 1 action\nRange: 150 feet\nComponents: V, S, M ( re and a piece of sunstone) Duration: Instantaneous\nBrilliant sunlight  ashes in a 60-foot radius centered\non a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn\u2019t blinded by this spell. Undead and oozes have disadvantage on this saving throw.\nA creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.\nThis spell dispels any darkness in its area that was created by a spell."
	            },
	            {
	                title: "Teleport",
	                selected: false,
	                minimized: false,
	                content: "7th-level conjuration\nCasting Time: 1 action Range: 10 feet Components: V Duration: Instantaneous\nThis spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to  t entirely inside a 10-foot cube, and it can\u2019t be held or carried by an unwilling creature.\nThe destination you choose must be known to you, and it must be on the same plane of existence as\nyou. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.\nFamiliarity. \u201CPermanent circle\u201D means a permanent teleportation circle whose sigil sequence you know. \u201CAssociated object\u201D means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard\u2019s library, bed linen from a royal suite, or a chunk of marble from a lich\u2019s secret tomb.\n\u201CVery familiar\u201D is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. \u201CSeen casually\u201D is someplace you have seen more than once but with which you aren\u2019t very familiar. \u201CViewed once\u201D is a place you have seen once, possibly using magic. \u201CDescription\u201D is a place whose location and appearance you know through someone else\u2019s description, perhaps from a map.\n\u201CFalse destination\u201D is a place that doesn\u2019t exist. Perhaps you tried to scry an enemy\u2019s sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.\nOn Target. You and your group (or the target object) appear where you want to.\nO  Target. You and your group (or the target object) appear a random distance away from the destination\nin a random direction. Distance o  target is 1d10 \u00D7 1d10 percent of the distance that was to be traveled.\nFor example, if you tried to travel 120 miles, landed o  target, and rolled a 5 and 3 on the two d10s, then you would be o  target by 15 percent, or 18 miles. The DM determines the direction o  target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.\nSimilar Area. You and your group (or the target object) wind up in a di erent area that\u2019s visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard\u2019s laboratory or in\nan alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.\nMishap. The spell\u2019s unpredictable magic results in a di cult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).\nTable: Teleportation (refer to real manual)"
	            },
	            {
	                title: "Thaumaturgy",
	                selected: false,
	                minimized: false,
	                content: "Transmutation cantrip\nCasting Time: 1 action Range: 30 feet Components: V Duration: Up to 1 minute\nYou manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical e ects within range:\n\u2022 Your voice booms up to three times as loud as normal for 1 minute.\n\u2022 You cause  ames to  icker, brighten, dim, or change color for 1 minute.\n\u2022 You cause harmless tremors in the ground for 1 minute.\n\u2022 You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or omi- nous whispers.\n\u2022 You instantaneously cause an unlocked door or win- dow to  y open or slam shut.\n\u2022 You alter the appearance of your eyes for 1 minute.\nIf you cast this spell multiple times, you can have up to three of its 1-minute e ects active at a time, and you can dismiss such an e ect as an action."
	            },
	            {
	                title: "Thunderwave",
	                selected: false,
	                minimized: false,
	                content: "1st-level evocation\nCasting Time: 1 action Range: Self (15-foot cube) Components: V, S Duration: Instantaneous\nA wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn\u2019t pushed.\nIn addition, unsecured objects that are completely within the area of e ect are automatically pushed 10 feet away from you by the spell\u2019s e ect, and the spell emits a thunderous boom audible out to 300 feet.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
	            },
	            {
	                title: "Time Stop",
	                selected: false,
	                minimized: false,
	                content: "9th-level transmutation\nCasting Time: 1 action Range: Self Components: V Duration: Instantaneous\nYou brie y stop the  ow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.\nThis spell ends if one of the actions you use during this period, or any e ects that you create during this period, a ects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
	            },
	            {
	                title: "True Resurrection",
	                selected: false,
	                minimized: false,
	                content: "9th-level necromancy\nCasting Time: 1 hour\nRange: Touch\nComponents: V, S, M (a sprinkle of holy water and\ndiamonds worth at least 25,000 gp, which the\nspell consumes) Duration: Instantaneous\nYou touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature\u2019s soul is free and willing, the creature is restored to life with all its hit points.\nThis spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses a ecting the creature when it died. The spell replaces damaged or missing organs and limbs.\nThe spell can even provide a new body if the original no longer exists, in which case you must speak the creature\u2019s name. The creature then appears in an unoccupied space you choose within 10 feet of you."
	            },
	            {
	                title: "True Seeing",
	                selected: false,
	                minimized: false,
	                content: "6th-level divination\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (an ointment for the eyes that\ncosts 25 gp; is made from mushroom powder, sa ron,\nand fat; and is consumed by the spell) Duration: 1 hour\nThis spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
	            },
	            {
	                title: "Vampiric Touch",
	                selected: false,
	                minimized: false,
	                content: "3rd-level necromancy\nCasting Time: 1 action\nRange: Self\nComponents: V, S\nDuration: Concentration up to 1 minute\n\nThe touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases Id6 for each slot level above 3rd."
	            },
	            {
	                title: "Wall of Fire",
	                selected: false,
	                minimized: false,
	                content: "4th-level evocation\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S, M (a small piece of phosphorus) Duration: Concentration, up to 1 minute\nYou create a wall of  re on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\nWhen the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8  re damage, or half as much damage on a successful save.\nOne side of the wall, selected by you when you cast this spell, deals 5d8  re damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the  rst time on a turn or ends its turn there. The other side of the wall deals no damage.\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
	            },
	            {
	                title: "Wall of Stone",
	                selected: false,
	                minimized: false,
	                content: "5th-level evocation\nCasting Time: 1 action\nRange: 120 feet\nComponents: V, S, M (a small block of granite) Duration: Concentration, up to 10 minutes\nA nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.\nIf the wall cuts through a creature\u2019s space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.\nThe wall can have any shape you desire, though it can\u2019t occupy the same space as a creature or object.\nThe wall doesn\u2019t need to be vertical or rest on any  rm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.\nIf you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.\nThe wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel\nto 0 hit points destroys it and might cause connected panels to collapse at the DM\u2019s discretion.\nIf you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
	            },
	            {
	                title: "Warding Bond",
	                selected: false,
	                minimized: false,
	                content: "2nd-level abjuration\nCasting Time: 1 action\nRange: Touch\nComponents: V, S, M (a pair of platinum rings worth at\nleast 50 gp each, which you and the target must wear\nfor the duration) Duration: 1 hour\nThis spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and\nit has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.\nThe spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell\nas an action."
	            },
	            {
	                title: "Web",
	                selected: false,
	                minimized: false,
	                content: "2nd-level conjuration\nCasting Time: 1 action\nRange: 60 feet\nComponents: V, S, M (a bit of spiderweb) Duration: Concentration, up to 1 hour\nYou conjure a mass of thick, sticky webbing at a point of your choice within range. The webs  ll a 20-foot cube from that point for the duration. The webs are di cult terrain and lightly obscure their area.\nIf the webs aren\u2019t anchored between two solid masses (such as walls or trees) or layered across a  oor, wall,\nor ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a  at surface have a depth of 5 feet.\nEach creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.\nA creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.\nThe webs are  ammable. Any 5-foot cube of webs exposed to  re burns away in 1 round, dealing 2d4  re damage to any creature that starts its turn in the fire."
	            }
	        ]
	    },
	    {
	        name: "Equipment",
	        expanded: false,
	        children: [
	            {
	                title: "Armor",
	                selected: false,
	                minimized: false,
	                content: "Padded: AC = 11 + Dex, Stealth Disadvantage\nLeather: AC = 11 + Dex\nStudded Leather: AC = 12 + Dex\nHide: AC = 12 + Dex (max 2)\nChain Shirt: AC = 13 + Dex (max 2)\nScale Mail: AC = 14 + Dex (max 2)\nBreastplate: AC = 14 + Dex (max 2), Stealth Disadvantage\nHalf Plate: AC = 15 + Dex (max 2)\nRing Mail: AC = 14, Stealth Disadvantage\nChain Mail: AC = 16, Requires Str 13, Stealth Disadvantage\nSplint: AC = 17, Requires Str 15, Stealth Disadvantage\nPlate: AC = 18, Requires Str 15, Stealth Disadvantage\nShield: AC + 2"
	            },
	            {
	                title: "Driftglobe",
	                selected: false,
	                minimized: false,
	                content: "\nWondrous item, uncommon\n\nThis small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the light or daylight spell. Once used, the daylight effect can't be used again until the next dawn.\n\nYou can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
	            },
	            {
	                title: "Simple Melee Weapons",
	                selected: false,
	                minimized: false,
	                content: "Club: 1d4 bludgeoning, Light\nDagger: 1d4 piercing, Finesse, light, thrown (range 20/60)\nGreatclub: 1d8 bludgeoning, Two-handed\nHandaxe: 1d6 slashing, Light, thrown (range 20/60)\nJavelin: 1d6 piercing, Thrown (range 30/120)\nLight hammer: 1d4 bludgeoning, Light, thrown (range 20/60)\nMace: 1d6 bludgeoning\nQuarterstaff: 1d6 bludgeoning, Versatile (1d8)\t\nSickel: 1d4 slashing, Light"
	            },
	            {
	                title: "Simple Ranged Weapons",
	                selected: false,
	                minimized: false,
	                content: "Spear: 1d6 piercing, Thrown (range 20/60), versatile (1d8)\nCrossbow, light: 1d8 piercing, Ammunition (range 80/320), loading, two-handed\nDart: 1d4 piercing, Finesse, thrown (range 20/60)\nShortbow: 1d6 piercing, Ammunition (range 80/320), two-handed\nSling: 1d4 bludgeoning, Ammunition (range 30/120)"
	            },
	            {
	                title: "Martial Melee Weapons",
	                selected: false,
	                minimized: false,
	                content: "Battleaxe: 1d8 slashing, Versatile (1d10)\nFlail: 1d8 bludgeoning\nGlaive: 1d10 slashing, Heavy, reach two-handed\nGreataxe: 1d12 slashing, Heavy, two-handed\nGreatsword: 2d6 slashing, Heavy, two-handed\nhalberd: 1d10 slashing, Heavy, reach, two-handed\nLance: 1d12 piercing, Reach, special\nLongsword: 1d8 slashing, Versatile (1d10)\nMaul: 2d6 bludgeoning, Heavy, two-handed\nMorningstar: 1d8 piercing\nPike: 1d10 piercing, Heavy, reach, two-handed\nRapier: 1d8 piercing, Finesse\nScimitar: 1d6 slashing, Finesse, light\nShortsword: 1d6 piercing, Finesse, light\nTrident: 1d6 piercing, Thrown (range 20/60), versatile (1d8)\nWar pick: 1d8 piercing\nWarhammer: 1d8 bludgeoning, Versatile (1d10)\nWhip: 1d4 slashing, Finesse, reach"
	            },
	            {
	                title: "Martial Ranged Weapons",
	                selected: false,
	                minimized: false,
	                content: "Crossbow, hand: 1d6 piercing, Ammunition (range 30/120), light, loading\nCrossbow, heavy: 1d10 piercing, Ammunition (range 100/400), heavy, loading, two-handed\nLongbow: 1d8 piercing, Ammunition (range 150/600), heavy, two-handed"
	            },
	            {
	                title: "Wand of Magic Missiles",
	                selected: false,
	                minimized: false,
	                content: "\n<p><i>Wand, rare (requires attunement by spellcaster)</i></p>\n\n<p>This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.</p>\n\n<p>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</p>"
	            }
	        ]
	    },
	    {
	        name: "Rules",
	        expanded: false,
	        children: [
	            {
	                title: "Ability Score Modifiers",
	                selected: false,
	                minimized: false,
	                content: "1: -5\n2-3: -4\n4-5: -3\n6-7: -2\n8-9: -1\n10-11: +0\n12-13: +1\n14-15: +2\n16-17: +3\n18-19: +4"
	            },
	            {
	                title: 'Advantage and Disadvantage',
	                selected: false,
	                minimized: false,
	                content: "Sometimes a special ability or spell tells you that you have advantage or disadvantage on an ability check, a saving throw, or an attack roll. When that happens, you roll a second d20 when you make the roll. Use the higher of the two rolls if you have advantage, and use the lower roll if you have disadvantage. For example, if you have disadvantage and roll a 17 and a 5, you use the 5. If you instead have advantage and roll those numbers, you use the 17.\nIf multiple situations affect a roll and each one grants advantage or imposes disadvantage on it, you don\u2019t roll more than one additional d20. If two favorable situations grant advantage, for example, you still roll only one additional d20.\nIf circumstances cause a roll to have both advantage and disadvantage, you are considered to have neither of them, and you roll one d20. This is true even if multiple circumstances impose disadvantage and only one grants advantage or vice versa. In such a situation, you have neither advantage nor disadvantage.\nWhen you have advantage or disadvantage and something in the game, such as the halfling\u2019s Lucky trait, lets you reroll the d20, you can reroll only one of the dice. You choose which one. For example, if a halfling has advantage or disadvantage on an ability check and rolls a 1 and a 13, the halfling could use the Lucky trait to reroll the 1.\nYou usually gain advantage or disadvantage through the use of special abilities, actions, or spells. Inspiration can also give a character advantage (as explained in chapter 4, \u201CPersonality and Background\u201D). The DM can also decide that circumstances influence a roll in one direction or the other and grant advantage or impose disadvantage as a result."
	            },
	            {
	                title: "Attunement",
	                selected: false,
	                minimized: false,
	                content: "\n<p>Some magic items require a creature to form a bond with them before its magical properties can be used.</p>\n<p>If the prerequisite is a class, a creature must be that class (if the class is a spellcasting class, a monster qualifies if it has spell slots and uses that class\u2019s spell list).</p>\n<p>If the prerequisite is to be a spellcaster, a creature must be able to cast at least one spell using its traits or features (not another magic item).</p>\n<p>Attuning to an item requires a creature to spend a short rest focused on only that item while being in physical contact with it (this can\u2019t be the same short rest used to learn the items properties). Focus can take the form of weapon practice (for a weapon), meditation (for a wondrous item), or some other appropriate activity. If the short rest is interrupted, the attunement fails.</p>\n<p>An item can only be attuned to one creature at a time, and a creature can be attuned to no more than 3 magical items at a time. The fourth attunement will fail - a creature must first end an existing attunement. A creature can\u2019t attune to more than one copy of an item.</p>\n<p>Attunement ends if the item has been more than 100 feet away for at least 24 hours, if the creature dies, or if another creature attunes the item. A creature can voluntarily end the attunement by spending another short rest focused on the item, unless the item is cursed.</p>"
	            },
	            {
	                title: "Blinded",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A blinded creature can\u2019t see and automatically fails any ability check that requires sight.\n\u2022 Attack rolls against the creature have advantage, and the creature\u2019s attack rolls have disadvantage."
	            },
	            {
	                title: 'Blindsight',
	                selected: false,
	                minimized: false,
	                content: "A creature with blindsight can perceive its surroundings without relying on sight, within a specific radius. Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
	            },
	            {
	                title: 'Bonus Actions',
	                selected: false,
	                minimized: false,
	                content: "Various class features, spells, and other abilities let you take an additional action on your turn called a bonus action. The Cunning Action feature, for example, allows a rogue to take a bonus action. You can take a bonus action only when a special ability, spell, or other feature of the game states that you can do something as a bonus action. You otherwise don\u2019t have a bonus action to take.\nYou can take only one bonus action on your turn, so you must choose which bonus action to use when you have more than one available.\nYou choose when to take a bonus action during your turn, unless the bonus action\u2019s timing is specified, and anything that deprives you of your ability to take actions also prevents you from taking a bonus action."
	            },
	            {
	                title: "Charmed",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A charmed creature can\u2019t attack the charmer or target the charmer with harmful abilities or magical e ects.\n\u2022 The charmer has advantage on any ability check to interact socially with the creature."
	            },
	            {
	                title: 'Climbing, Swimming, and Crawling',
	                selected: false,
	                minimized: false,
	                content: "While climbing or swimming, each foot of movement costs 1 extra foot (2 extra feet in difficult terrain), unless a creature has a climbing or swimming speed. At the DM\u2019s option, climbing a slippery vertical surface or one with few handholds requires a successful Strength (Athletics) check. Similarly, gaining any distance in rough water might require a successful Strength (Athletics) check."
	            },
	            {
	                title: 'Contests',
	                selected: false,
	                minimized: false,
	                content: "Sometimes one character\u2019s or monster\u2019s efforts are directly opposed to another\u2019s. This can occur when both of them are trying to do the same thing and only one can succeed, such as attempting to snatch up a magic ring that has fallen on the floor. This situation also applies when one of them is trying to prevent the other one from accomplishing a goal\u2014for example, when a monster tries\nto force open a door that an adventurer is holding closed. In situations like these, the outcome is determined by a special form of ability check, called a contest.\nBoth participants in a contest make ability checks appropriate to their efforts. They apply all appropriate bonuses and penalties, but instead of comparing the total to a DC, they compare the totals of their two checks. The participant with the higher check total wins the contest. That character or monster either succeeds at the action or prevents the other one from succeeding.\nIf the contest results in a tie, the situation remains the same as it was before the contest. Thus, one contestant might win the contest by default. If two characters tie in a contest to snatch a ring off the floor, neither character grabs it. In a contest between a monster trying to open a door and an adventurer trying to keep the door closed, a tie means that the door remains shut."
	            },
	            {
	                title: 'Cover',
	                selected: false,
	                minimized: false,
	                content: "There are three degrees of cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren\u2019t added together. For example, if a target is behind a creature that gives half cover and a tree trunk that gives three-quarters cover, the target has three-quarters cover.\nA target with half cover has a +2 bonus to AC and Dexterity saving throws. A target has half cover if an obstacle blocks at least half of its body. The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.\nA target with three-quarters cover has a +5 bonus to AC and Dexterity saving throws. A target has three- quarters cover if about three-quarters of it is covered by an obstacle. The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.\nA target with total cover can\u2019t be targeted directly by an attack or a spell, although some spells can reach such a target by including it in an area of effect. A target has total cover if it is completely concealed by an obstacle."
	            },
	            {
	                title: 'Critical Hits',
	                selected: false,
	                minimized: false,
	                content: "When you score a critical hit, you get to roll extra dice for the attack\u2019s damage against the target. Roll all of the attack\u2019s damage dice twice and add them together. Then add any relevant modifiers as normal. To speed up play, you can roll all the damage dice at once.\nFor example, if you score a critical hit with a dagger, roll 2d4 for the damage, rather than 1d4, and then add your relevant ability modifier. If the attack involves other damage dice, such as from the rogue\u2019s Sneak Attack feature, you roll those dice twice as well."
	            },
	            {
	                title: 'Damage Resistance and Vulnerability',
	                selected: false,
	                minimized: false,
	                content: "Some creatures and objects are exceedingly difficult or unusually easy to hurt with certain types of damage.\nIf a creature or an object has resistance to a damage type, damage of that type is halved against it. If a\ncreature or an object has vulnerability to a damage type, damage of that type is doubled against it.\nResistance and then vulnerability are applied after all other modifiers to damage. For example, a creature has resistance to bludgeoning damage and is hit by an attack that deals 25 bludgeoning damage. The creature is also within a magical aura that reduces all damage by 5. The 25 damage is first reduced by 5 and then halved, so the creature takes 10 damage.\nMultiple instances of resistance or vulnerability that affect the same damage type count as only one instance. For example, if a creature has resistance to fire damage as well as resistance to all nonmagical damage, the damage of a nonmagical fire is reduced by half against the creature, not reduced by three-quarters."
	            },
	            {
	                title: 'Darkvision',
	                selected: false,
	                minimized: false,
	                content: "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision. Within a specified range, a creature with darkvision can see in darkness as if the darkness were dim light, so areas of darkness are only lightly obscured as far as that creature is concerned. However, the creature can\u2019t discern color in darkness, only shades of gray."
	            },
	            {
	                title: 'Dash',
	                selected: false,
	                minimized: false,
	                content: "When you take the Dash action, you gain extra movement for the current turn. The increase equals your speed, after applying any modifiers. With a speed of 30 feet, for example, you can move up to 60 feet on your turn if you dash.\n\nAny increase or decrease to your speed changes this additional movement by the same amount. If your speed of 30 feet is reduced to 15 feet, for instance, you can move up to 30 feet this turn if you dash."
	            },
	            {
	                title: "Deafened",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A deafened creature can\u2019t hear and automatically fails any ability check that requires hearing.\nFrightened\n\u2022 A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.\n\u2022 The creature can\u2019t willingly move closer to the source of its fear."
	            },
	            {
	                title: 'Difficult Terrain',
	                selected: false,
	                minimized: false,
	                content: "The travel speeds given in the Travel Pace table assume relatively simple terrain: roads, open plains, or clear dungeon corridors. But adventurers often face dense forests, deep swamps, rubble-filled ruins, steep mountains, and ice-covered ground\u2014all considered difficult terrain.\nYou move at half speed in difficult terrain\u2014moving 1 foot in difficult terrain costs 2 feet of speed\u2014so you can cover only half the normal distance in a minute, an hour, or a day."
	            },
	            {
	                title: 'Difficulty Classes',
	                selected: false,
	                minimized: false,
	                content: "Task Difficulty - DC\nVery easy - 5\nEasy - 10\nMedium - 15\nHard - 20\nVery hard - 25\nNearly impossible - 30"
	            },
	            {
	                title: 'Disengage',
	                selected: false,
	                minimized: false,
	                content: "If you take the Disengage action, your movement doesn\u2019t provoke opportunity attacks for the rest of the turn."
	            },
	            {
	                title: 'Dodge',
	                selected: false,
	                minimized: false,
	                content: "When you take the Dodge action, you focus entirely on avoiding attacks. Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated (as explained in appendix A) or if your speed drops to 0."
	            },
	            {
	                title: 'Dropping to 0 Hitpoints',
	                selected: false,
	                minimized: false,
	                content: "When you drop to 0 hit points, you either die outright or fall unconscious, as explained in the following sections.\nInstant Death\nMassive damage can kill you instantly. When damage reduces you to 0 hit points and there is damage remaining, you die if the remaining damage equals or exceeds your hit point maximum.\nFor example, a cleric with a maximum of 12 hit points currently has 6 hit points. If she takes 18 damage from an attack, she is reduced to 0 hit points, but 12 damage remains. Because the remaining damage equals her hit point maximum, the cleric dies.\nFalling Unconscious\nIf damage reduces you to 0 hit points and fails to kill you, you fall unconscious (see appendix A). This unconsciousness ends if you regain any hit points.\nDeath Saving Throws\nWhenever you start your turn with 0 hit points, you must make a special saving throw, called a death saving throw, to determine whether you creep closer to death or hang onto life. Unlike other saving throws, this one isn\u2019t tied to any ability score. You are in the hands of fate now, aided only by spells and features that improve your chances of succeeding on a saving throw.\nRoll a d20. If the roll is 10 or higher, you succeed. Otherwise, you fail. A success or failure has no effect by itself. On your third success, you become stable (see below). On your third failure, you die. The successes and failures don\u2019t need to be consecutive; keep track of both until you collect three of a kind. The number of both is reset to zero when you regain any hit points or become stable.\nRolling 1 or 20. When you make a death saving throw and roll a 1 on the d20, it counts as two failures. If you roll a 20 on the d20, you regain 1 hit point.\nDamage at 0 Hit Points. If you take any damage while you have 0 hit points, you suffer a death saving throw failure. If the damage is from a critical hit, you suffer two failures instead. If the damage equals or exceeds your hit point maximum, you suffer instant death.\nStabilizing a Creature\nThe best way to save a creature with 0 hit points is to heal it. If healing is unavailable, the creature can at least be stabilized so that it isn\u2019t killed by a failed death saving throw.\nYou can use your action to administer first aid to an unconscious creature and attempt to stabilize it, which requires a successful DC 10 Wisdom (Medicine) check.\nA stable creature doesn\u2019t make death saving throws, even though it has 0 hit points, but it does remain unconscious. The creature stops being stable, and must start making death saving throws again, if it takes any damage. A stable creature that isn\u2019t healed regains 1 hit point after 1d4 hours."
	            },
	            {
	                title: "Dwarf Traits",
	                selected: false,
	                minimized: false,
	                content: "Ability Score Increase. Your Constitution score increases by 2.\nAge. Dwarves mature at the same rate as humans, but they\u2019re considered young until they reach the age of 50. On average, they live about 350 years.\nAlignment. Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.\nSize. Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.\nSpeed. Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.\nDarkvision. Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u2019t discern color in darkness, only shades of gray.\nDwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9).\nDwarven Combat Training. You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.\nTool Proficiency. You gain proficiency with the artisan\u2019s tools of your choice: smith\u2019s tools, brewer\u2019s supplies, or mason\u2019s tools.\nStonecunning. Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\nLanguages. You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.\nSubrace. Two main subraces of dwarves populate the worlds of D&D: hill dwarves and mountain dwarves. Choose one of these subraces.\nHill Dwarf\nAs a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faer\u00FBn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.\nAbility Score Increase. Your Wisdom score increases by 1.\nDwarven Toughness. Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.\nMountain Dwarf\nAs a mountain dwarf, you\u2019re strong and hardy, accustomed to a difficult life in rugged terrain. You\u2019re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faer\u00FBn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.\nAbility Score Increase. Your Strength score increases by 2.\nDwarven Armor Training. You have proficiency with light and medium armor."
	            },
	            {
	                title: "Elf Traits",
	                selected: false,
	                minimized: false,
	                content: "Ability Score Increase. Your Dexterity score increases by 2.\nAge. Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.\nAlignment. Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others\u2019 freedom as well as their own, and they are more often good than not.\nSize. Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium. Speed. Your base walking speed is 30 feet. Darkvision. Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u2019t discern color in darkness, only shades of gray.\nKeen Senses. You have proficiency in the Perception skill.\nFey Ancestry. You have advantage on saving throws against being charmed, and magic can\u2019t put you to sleep.\nTrance. Elves don\u2019t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \u201Ctrance.\u201D) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.\nLanguages. You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.\nSubrace. Ancient divides among the elven people resulted in three main subraces: high elves, wood elves, and dark elves, who are commonly called drow. This document presents two of these subraces to choose from. In some worlds, these subraces are divided still further (such as the sun elves and moon elves of the Forgotten Realms), so if you wish, you can choose a narrower subrace.\nHigh Elf\nAs a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.\nThe sun elves of Faer\u00FBn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.\nAbility Score Increase. Your Intelligence score increases by 1.\nElf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow.\nCantrip. You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.\nExtra Language. You can speak, read, and write one extra language of your choice.\nWood Elf\nAs a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faer\u00FBn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves.\nWood elves\u2019 skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper- colored. Their eyes are green, brown, or hazel.\nAbility Score Increase. Your Wisdom score increases by 1.\nElf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow.\nFleet of Foot. Your base walking speed increases to 35 feet.\nMask of the Wild. You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
	            },
	            {
	                title: 'Falling',
	                selected: false,
	                minimized: false,
	                content: "A fall from a great height is one of the most common hazards facing an adventurer.\nAt the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 feet it fell, to a maximum of 20d6. The creature lands prone, unless it avoids taking damage from the fall."
	            },
	            {
	                title: 'Finding a Hidden Object',
	                selected: false,
	                minimized: false,
	                content: "When your character searches for a hidden object such as a secret door or a trap, the DM typically asks you to make a Wisdom (Perception) check. Such a check can be used to find hidden details or other information and clues that you might otherwise overlook.\nIn most cases, you need to describe where you are looking in order for the DM to determine your chance of success. For example, a key is hidden beneath a set of folded clothes in the top drawer of a bureau. If you tell the DM that you pace around the room, looking at the walls and furniture for clues, you have no chance of finding the key, regardless of your Wisdom (Perception) check result. You would have to specify that you were opening the drawers or searching the bureau in order to have any chance of success."
	            },
	            {
	                title: 'Flying Movement',
	                selected: false,
	                minimized: false,
	                content: "Flying creatures enjoy many benefits of mobility, but they must also deal with the danger of falling. If a flying creature is knocked prone, has its speed reduced to 0, or is otherwise deprived of the ability to move, the creature falls, unless it has the ability to hover or it is being held aloft by magic, such as by the fly spell."
	            },
	            {
	                title: "Grappled",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A grappled creature\u2019s speed becomes 0, and it can\u2019t bene t from any bonus to its speed.\n\u2022 The condition ends if the grappler is incapacitated (see the condition).\n\u2022 The condition also ends if an e ect removes the grappled creature from the reach of the grappler or grappling e ect, such as when a creature is hurled away by the thunderwave spell."
	            },
	            {
	                title: 'Grappling',
	                selected: false,
	                minimized: false,
	                content: "When you want to grab a creature or wrestle with it, you can use the Attack action to make a special melee attack, a grapple. If you\u2019re able to make multiple attacks with the Attack action, this attack replaces one of them.\nThe target of your grapple must be no more than one size larger than you, and it must be within your reach. Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target\u2019s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). If you succeed, you subject the target to the grappled condition (see appendix A). The condition specifies the things that end it, and you can release the target whenever you like (no action required).\nEscaping a Grapple. A grappled creature can use its action to escape. To do so, it must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your Strength (Athletics) check.\nMoving a Grappled Creature. When you move, you can drag or carry the grappled creature with you, but your speed is halved, unless the creature is two or more sizes smaller than you."
	            },
	            {
	                title: "Halfling Traits",
	                selected: false,
	                minimized: false,
	                content: "Ability Score Increase. Your Dexterity score increases by 2.\nAge. A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.\nAlignment. Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.\nSize. Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small. Speed. Your base walking speed is 25 feet. Lucky. When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.\nBrave. You have advantage on saving throws against being frightened.\nHalfling Nimbleness. You can move through the space of any creature that is of a size larger than yours.\nLanguages. You can speak, read, and write Common and Halfling. The Halfling language isn\u2019t secret, but halflings are loath to share it with others. They write very little, so they don\u2019t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.\nSubrace. The two main kinds of halfling, lightfoot and stout, are more like closely related families than true subraces. Choose one of these subraces.\nLightfoot\nAs a lightfoot halfling, you can easily hide from notice, even using other people as cover. You\u2019re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.\nLightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.\nAbility Score Increase. Your Charisma score increases by 1.\nNaturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.\nStout\nAs a stout halfling, you\u2019re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they\u2019re most common in the south.\nAbility Score Increase. Your Constitution score increases by 1.\nStout Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."
	            },
	            {
	                title: 'Help',
	                selected: false,
	                minimized: false,
	                content: "You can lend your aid to another creature in the completion of a task. When you take the Help action, the creature you aid gains advantage on the next ability check it makes to perform the task you are helping with, provided that it makes the check before the start of your next turn.\nAlternatively, you can aid a friendly creature in attacking a creature within 5 feet of you. You feint, distract the target, or in some other way team up to make your ally\u2019s attack more effective. If your ally attacks the target before your next turn, the first attack roll is made with advantage."
	            },
	            {
	                title: 'Hiding',
	                selected: false,
	                minimized: false,
	                content: "The DM decides when circumstances are appropriate for hiding. When you try to hide, make a Dexterity (Stealth) check. Until you are discovered or you stop hiding, that check\u2019s total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.\nYou can\u2019t hide from a creature that can see you clearly, and you give away your position if you make noise, such as shouting a warning or knocking over a vase. An invisible creature can\u2019t be seen, so it can always try to hide. Signs of its passage might still be noticed, however, and it still has to stay quiet.\nIn combat, most creatures stay alert for signs of danger all around, so if you come out of hiding and approach a creature, it usually sees you. However, under certain circumstances, the Dungeon Master might allow you to stay hidden as you approach a creature that is distracted, allowing you to gain advantage on an attack before you are seen.\nPassive Perception. When you hide, there\u2019s a chance someone will notice you even if they aren\u2019t searching. To determine whether such a creature notices you, the DM compares your Dexterity (Stealth) check with that creature\u2019s passive Wisdom (Perception) score, which equals 10 + the creature\u2019s Wisdom modifier, as well as any other bonuses or penalties. If the creature has advantage, add 5. For disadvantage, subtract 5.\nFor example, if a 1st-level character (with a proficiency bonus of +2) has a Wisdom of 15 (a +2 modifier) and proficiency in Perception, he or she has a passive Wisdom (Perception) of 14.\nWhat Can You See? One of the main factors in determining whether you can find a hidden creature or object is how well you can see in an area, which might be lightly or heavily obscured, as explained in chapter 8."
	            },
	            {
	                title: "Human Traits",
	                selected: false,
	                minimized: false,
	                content: "Ability Score Increase. Your ability scores each increase by 1.\nAge. Humans reach adulthood in their late teens and live less than a century.\nAlignment. Humans tend toward no particular alignment. The best and the worst are found among them.\nSize. Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium. Speed. Your base walking speed is 30 feet. Languages. You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
	            },
	            {
	                title: "Incapacitated",
	                selected: false,
	                minimized: false,
	                content: "\u2022 An incapacitated creature can\u2019t take actions or reactions."
	            },
	            {
	                title: "Invisible",
	                selected: false,
	                minimized: false,
	                content: "\u2022 An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The crea- ture\u2019s location can be detected by any noise it makes or any tracks it leaves.\n\u2022 Attack rolls against the creature have disadvantage, and the creature\u2019s attack rolls have advantage."
	            },
	            {
	                title: 'Jumping',
	                selected: false,
	                minimized: false,
	                content: "Your Strength determines how far you can jump.\nLong Jump. When you make a long jump, you cover a number of feet up to your Strength score if you move at least 10 feet on foot immediately before the jump. When you make a standing long jump, you can leap only half that distance. Either way, each foot you clear on the jump costs a foot of movement.\nThis rule assumes that the height of your jump doesn\u2019t matter, such as a jump across a stream or chasm. At your DM\u2019s option, you must succeed on a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump\u2019s distance), such as a hedge or low wall. Otherwise, you hit it.\nWhen you land in difficult terrain, you must succeed on a DC 10 Dexterity (Acrobatics) check to land on your feet. Otherwise, you land prone.\nHigh Jump. When you make a high jump, you leap into the air a number of feet equal to 3 + your Strength modifier if you move at least 10 feet on foot immediately before the jump. When you make a standing high jump, you can jump only half that distance. Either way, each foot you clear on the jump costs a foot of movement. In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can.\nYou can extend your arms half your height above yourself during the jump. Thus, you can reach above you a distance equal to the height of the jump plus 1\u00BD times your height."
	            },
	            {
	                title: 'Long Rest',
	                selected: false,
	                minimized: false,
	                content: "A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity: reading, talking, eating, or standing watch for no more than 2 hours. If the rest is interrupted by a period of strenuous activity\u2014at least 1 hour of walking, fighting, casting spells, or similar adventuring activity\u2014 the characters must begin the rest again to gain any benefit from it.\nAt the end of a long rest, a character regains all lost hit points. The character also regains spent Hit Dice, up to a number of dice equal to half of the character\u2019s total number of them (minimum of one die). For example, if a character has eight Hit Dice, he or she can regain four spent Hit Dice upon finishing a long rest.\nA character can\u2019t benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits."
	            },
	            {
	                title: 'Moving Around Other Creatures',
	                selected: false,
	                minimized: false,
	                content: "You can move through a nonhostile creature\u2019s space. In contrast, you can move through a hostile creature\u2019s space only if the creature is at least two sizes larger or smaller than you. Remember that another creature\u2019s space is difficult terrain for you.\nWhether a creature is a friend or an enemy, you can\u2019t willingly end your move in its space.\nIf you leave a hostile creature\u2019s reach during your move, you provoke an opportunity attack, as explained later in the chapter."
	            },
	            {
	                title: 'Opportunity Attacks',
	                selected: false,
	                minimized: false,
	                content: "In a fight, everyone is constantly watching for enemies to drop their guard. You can rarely move heedlessly past your foes without putting yourself in danger; doing so provokes an opportunity attack.\nYou can make an opportunity attack when a hostile creature that you can see moves out of your reach. To make the opportunity attack, you use your reaction to make one melee attack against the provoking creature. The attack occurs right before the creature leaves your reach.\nYou can avoid provoking an opportunity attack by taking the Disengage action. You also don\u2019t provoke an opportunity attack when you teleport or when someone or something moves you without using your movement, action, or reaction. For example, you don\u2019t provoke an opportunity attack if an explosion hurls you out of a foe\u2019s reach or if gravity causes you to fall past an enemy."
	            },
	            {
	                title: "Paralyzed",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A paralyzed creature is incapacitated (see the condi- tion) and can\u2019t move or speak.\n\u2022 The creature automatically fails Strength and Dexterity saving throws.\n\u2022 Attack rolls against the creature have advantage.\n\u2022 Any attack that hits the creature is a critical hit if the\nattacker is within 5 feet of the creature."
	            },
	            {
	                title: 'Passive Checks',
	                selected: false,
	                minimized: false,
	                content: "A passive check is a special kind of ability check that doesn\u2019t involve any die rolls. Such a check can represent the average result for a task done repeatedly, such as searching for secret doors over and over again, or can be used when the DM wants to secretly determine whether the characters succeed at something without rolling dice, such as noticing a hidden monster.\nHere\u2019s how to determine a character\u2019s total for a passive check:\n10 + all modifiers that normally apply to the check\nIf the character has advantage on the check, add 5. For disadvantage, subtract 5. The game refers to a passive check total as a score.\nFor example, if a 1st-level character has a Wisdom of 15 and proficiency in Perception, he or she has a passive Wisdom (Perception) score of 14.\nThe rules on hiding in the \u201CDexterity\u201D section below rely on passive checks, as do the exploration rules in chapter 8."
	            },
	            {
	                title: "Petrified",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A petri ed creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.\n\u2022 The creature is incapacitated (see the condition), can\u2019t move or speak, and is unaware of its surroundings.\n\u2022 Attack rolls against the creature have advantage. \u2022 The creature automatically fails Strength and\nDexterity saving throws.\n\u2022 The creature has resistance to all damage.\n\u2022 The creature is immune to poison and disease,\nalthough a poison or disease already in its system is suspended, not neutralized."
	            },
	            {
	                title: "Poisoned",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A poisoned creature has disadvantage on attack rolls and ability checks."
	            },
	            {
	                title: "Prone",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A prone creature\u2019s only movement option is to crawl, unless it stands up and thereby ends the condition.\n\u2022 The creature has disadvantage on attack rolls.\n\u2022 An attack roll against the creature has advantage if the\nattacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage."
	            },
	            {
	                title: 'Ranged Attacks',
	                selected: false,
	                minimized: false,
	                content: "You can make ranged attacks only against targets within a specified range.\nIf a ranged attack, such as one made with a spell, has a single range, you can\u2019t attack a target beyond this range.\nSome ranged attacks, such as those made with a longbow or a shortbow, have two ranges. The smaller number is the normal range, and the larger number is the long range. Your attack roll has disadvantage when your target is beyond normal range, and you can\u2019t attack a target beyond the long range."
	            },
	            {
	                title: 'Ranged Attacks In Combat',
	                selected: false,
	                minimized: false,
	                content: "Aiming a ranged attack is more difficult when a foe is next to you. When you make a ranged attack with a weapon, a spell, or some other means, you have disadvantage on the attack roll if you are within 5 feet of a hostile creature who can see you and who isn\u2019t incapacitated."
	            },
	            {
	                title: 'Ready',
	                selected: false,
	                minimized: false,
	                content: "Sometimes you want to get the jump on a foe or wait for a particular circumstance before you act. To do so, you can take the Ready action on your turn, which lets you act using your reaction before the start of your next turn.\nFirst, you decide what perceivable circumstance will trigger your reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it. Examples include \u201CIf the cultist steps on the trapdoor, I\u2019ll pull the lever that opens it,\u201D and \u201CIf the goblin steps next to me, I move away.\u201D\nWhen the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger. Remember that you can take only one reaction per round.\nWhen you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell\u2019s magic requires concentration (explained in chapter 10). If your concentration is broken, the spell dissipates without taking effect. For example, if you are concentrating on the web spell and ready magic missile, your web spell ends, and if you take damage before you release magic missile with your reaction, your concentration might be broken."
	            },
	            {
	                title: "Restrained",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A restrained creature\u2019s speed becomes 0, and it can\u2019t bene t from any bonus to its speed.\n\u2022 Attack rolls against the creature have advantage, and the creature\u2019s attack rolls have disadvantage.\n\u2022 The creature has disadvantage on Dexterity saving throws."
	            },
	            {
	                title: 'Short Rest',
	                selected: false,
	                minimized: false,
	                content: "A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.\nA character can spend one or more Hit Dice at the end of a short rest, up to the character\u2019s maximum number of Hit Dice, which is equal to the character\u2019s level. For each Hit Die spent in this way, the player rolls the die and adds the character\u2019s Constitution modifier to it. The character regains hit points equal to the total. The player can decide to spend an additional Hit Die after each roll. A character regains some spent Hit Dice upon finishing a long rest, as explained below."
	            },
	            {
	                title: 'Shoving A Creature',
	                selected: false,
	                minimized: false,
	                content: "Using the Attack action, you can make a special melee attack to shove a creature, either to knock it prone or push it away from you. If you\u2019re able to make multiple attacks with the Attack action, this attack replaces one of them.\nThe target of your shove must be no more than one size larger than you, and it must be within your reach. You make a Strength (Athletics) check contested by the target\u2019s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). If you win the contest, you either knock the target prone or push it 5 feet away from you."
	            },
	            {
	                title: 'Squeezing Into A Smaller Space',
	                selected: false,
	                minimized: false,
	                content: "A creature can squeeze through a space that is large enough for a creature one size smaller than it. Thus, a Large creature can squeeze through a passage that\u2019s only 5 feet wide. While squeezing through a space, a creature must spend 1 extra foot for every foot it moves there, and it has disadvantage on attack rolls and Dexterity saving throws. Attack rolls against the creature have advantage while it\u2019s in the smaller space."
	            },
	            {
	                title: "Stunned",
	                selected: false,
	                minimized: false,
	                content: "\u2022 A stunned creature is incapacitated (see the condi- tion), can\u2019t move, and can speak only falteringly.\n\u2022 The creature automatically fails Strength and Dexterity saving throws.\n\u2022 Attack rolls against the creature have advantage."
	            },
	            {
	                title: 'Suffocating',
	                selected: false,
	                minimized: false,
	                content: "A creature can hold its breath for a number of minutes equal to 1 + its Constitution modifier (minimum of 30 seconds).\nWhen a creature runs out of breath, it can survive for a number of rounds equal to its Constitution modifier (minimum 1 round). At the start of its next turn, it drops to 0 hit points and is dying, and it can\u2019t regain hit points or be stabilized until it can breathe again.\nFor example, a creature with a Constitution of 14 can hold its breath for 3 minutes. If it starts suffocating, it has 2 rounds to reach air before it drops to 0 hit points."
	            },
	            {
	                title: 'Truesight',
	                selected: false,
	                minimized: false,
	                content: "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceive the original form of a shapechanger or a creature that is transformed by magic. Furthermore, the creature can see into the Ethereal Plane."
	            },
	            {
	                title: 'Two-Weapon Fighting',
	                selected: false,
	                minimized: false,
	                content: "When you take the Attack action and attack with a light melee weapon that you\u2019re holding in one hand, you can use a bonus action to attack with a different light melee weapon that you\u2019re holding in the other hand. You don\u2019t add your ability modifier to the damage of the bonus attack, unless that modifier is negative.\nIf either weapon has the thrown property, you can throw the weapon, instead of making a melee attack with it."
	            },
	            {
	                title: "Unconscious",
	                selected: false,
	                minimized: false,
	                content: "\u2022 An unconscious creature is incapacitated (see the condition), can\u2019t move or speak, and is unaware of its surroundings.\n\u2022 The creature drops whatever it\u2019s holding and falls prone.\n\u2022 The creature automatically fails Strength and Dexterity saving throws.\n\u2022 Attack rolls against the creature have advantage.\n\u2022 Any attack that hits the creature is a critical hit if the\nattacker is within 5 feet of the creature."
	            },
	            {
	                title: 'Vision and Light',
	                selected: false,
	                minimized: false,
	                content: "The most fundamental tasks of adventuring\u2014noticing danger, finding hidden objects, hitting an enemy in combat, and targeting a spell, to name just a few\u2014rely heavily on a character\u2019s ability to see. Darkness and other effects that obscure vision can prove a significant hindrance.\nA given area might be lightly or heavily obscured. In a lightly obscured area, such as dim light, patchy fog, or moderate foliage, creatures have disadvantage on Wisdom (Perception) checks that rely on sight.\nA heavily obscured area\u2014such as darkness, opaque fog, or dense foliage\u2014blocks vision entirely. A creature effectively suffers from the blinded condition (see appendix A) when trying to see something in that area.\nThe presence or absence of light in an environment creates three categories of illumination: bright light, dim light, and darkness.\nBright light lets most creatures see normally. Even gloomy days provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius.\nDim light, also called shadows, creates a lightly obscured area. An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness. The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light.\nDarkness creates a heavily obscured area. Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
	            },
	        ]
	    },
	    {
	        name: "Traps",
	        expanded: false,
	        children: [
	            {
	                title: 'Collapsing Roof',
	                selected: false,
	                minimized: false,
	                content: "Mechanical trap\nThis trap uses a trip wire to collapse the supports keeping an unstable section of a ceiling in place.\nThe trip wire is 3 inches off the ground and stretches between two support beams. The DC to spot the trip wire is 10. A successful DC 15 Dexterity check using thieves' tools disables the trip wire harmlessly. A character without thieves' tools can attempt this check with disadvantage using any edged weapon or edged tool. On a failed check, the trap triggers.\nAnyone who inspects the beams can easily determine that they are merely wedged in place. As an action, a character can knock over a beam, causing the trap to trigger.\nThe ceiling above the trip wire is in bad repair, and anyone who can see it can tell that it's in danger of collapse.\nWhen the trap is triggered, the unstable ceiling collapses. Any creature in the area beneath the unstable section must succeed on a DC 15 Dexterity saving throw, taking 22 (4d10) bludgeoning damage on a failed save, or half as much damage on a successful one. Once the trap is triggered, the floor of the area is filled with rubble and becomes difficult terrain."
	            },
	            {
	                title: 'Falling Net',
	                selected: false,
	                minimized: false,
	                content: "Mechanical trap\nThis trap uses a trip wire to release a net suspended from the ceiling.\nThe trip wire is 3 off the ground and stretches between two column of trees. The net is hidden by cobwebs or foliage. The DC to spot the trip wire and net is 10. A successful DC 15 Dexterity check using thieves' tools breaks the trip wire harmlessly. A character without thieves' tools can attemt this check with disadvantage using any edged weapon or edged tool. On a failed check, the trap triggers.\nWhen the trap is triggered, the net is released, covering a 10-foot-square area. Those in the area are trapped under the net and restrained, and those that fail a DC 10 Strength saving throw are also knocked prone. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. The net has AC 10 and 20 hit points. Dealing 5 slashing damage to the net (AC 10) destroys a 5-foot-square section of it, freeing any creature trapped in that section."
	            },
	            {
	                title: 'Fire-Breathing Statue',
	                selected: false,
	                minimized: false,
	                content: "Mechanical trap\nThis trap is activated when an intruder steps on a hidden pressure plate, relea ina a magical gout of flame from a nearby statue. The statue can be of anything, including a dragon or a wizard casting a spell.\nThe DC is 15 to spot the pressure plate, as well as faint scorch marks on the floor and walls. A spell or other effect that can sense the presence of magic, such as detect magic, reveals an aura of evocation magic around the statue.\nThe trap activates when more than 20 pounds of weight is placed on the pressure plate, causing the statue to release a 30-foot cone of fire. Each creature in the fire must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\nWedging an iron spike or other object under the pressure plate prevents the trap from activating. A successful dispel magic (DC 13) cast on the statue destroys the trap."
	            },
	            {
	                title: 'Simple Pit',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nThis pit has a cover constructed from material identical to the floor around it.\nA successful DC 15 Wisdom (Perception) check discerns an absence of foot traffic over the section of floor that forms the pit's cover. A successful DC 15 Intelligence (Investigation) check is necessary to confirm that the trapped section of floor is actually the cover of a pit.\nWhen a creature steps on the cover, it swings open like a trapdoor, causing the intruder to spill into the pit below. The pit is usually 10 or 20 feet deep but can be deeper.\nOnce the pit trap is detected, an iron spike or similar object can be wedged between the pit's cover and the surrounding floor in such a way as to prevent the cover from opening, thereby making it safe to cross. The cover can also be magically held shut using the arcane lock spell or similar magic."
	            },
	            {
	                title: 'Hidden Pit',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nA simple pit trap is a hole dug in the ground. The hole is covered by a large cloth anchored on the pit's edge and camouflaged with dirt and debris.\nThe DC to spot the pit is 10. Anyone stepping on the cloth falls through and pulls the cloth down into the pit, taking damage based on the pit's depth (usually 10 feet, but some pits are deeper)."
	            },
	            {
	                title: 'Locking Pit',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nThis pit trap is identical to a hidden pit trap, with one key exception: the trap door that covers the pit is spring-loaded. After a creature falls into the pit, the cover snaps shut to trap its victim inside.\nA successful DC 20 Strength check is necessary to pry the cover open. The cover can also be smashed open (determine the cover's statistics using the guidelines in chapter 8). A character in the pit can also attempt to disable the spring mechanism from the inside with a DC 15 Dexterity check using thieves' tools, provided that the mechanism can be reached and the character can see. In some cases, a mechanism (usually hidden behind a secret door nearby) opens the pit."
	            },
	            {
	                title: 'Spiked Pit',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nThis pit trap is a simple, hidden, or locking pit trap with sharpened wooden or iron spikes at the bottom. A creature falling into the pit takes 11 (2d10) piercing damage from the spikes, in addition to any falling damage. Even nastier versions have poison smeared on the spikes. In that case, anyone taking piercing damage from the spikes must also make a DC 13 Constitution saving throw, taking an 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
	            },
	            {
	                title: 'Poison Darts',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nWhen a creature steps on a hidden pressure plate, poison-tipped darts shoot from spring-loaded or pressurized tubes cleverly embedded in the surrounding walls. An area might include multiple pressure plates, each one rigged to its own set of darts.\nThe tiny holes in the walls are obscured by dust and cobwebs, or cleverly hidden amid bas-reliefs, murals, or frescoes that adorn the walls. The DC tq spot them is 15. With a successful DC 15 Intelligence (Investigation) check, a character can deduce the presence of the pressure plate from variations in the mortar and stone used to create it, compared to the surrounding floor. Wedging an iron spike or other object under the pressure plate prevents the trap from activating. Stuffing the holes with cloth or wax prevents the darts contained within from launching.\nThe trap activates when more than 20 pounds of weight is placed on the pressure plate, releasing four darts. Each dart makes a ranged attack with a +8 bonus against a random target within 10 feet of the pressure plate (vision is irrelevant to this attack roll). (If there are no targets in the area, the darts don't hit anything.) A target that is hit takes 2 (1d4) piercing damage and must ucceed on a DC 15 Constitution saving throw, taking 11 (2d10) poison damage on a failed save, or half as much damage on a successful one."
	            },
	            {
	                title: 'Poison Needle',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nA poisoned needle is hidden within a treasure chest's lock, or in something else that a creature might open. Opening the chest without the proper key causes the needle to spring out, delivering a dose of poison.\nWhen the trap is triggered, the needle extends 3 mches straight out from the lock. A creature within range takes 1 piercing damage and 11 (2d10) poison am age, and must succeed on a DC 15 Constitution -aving throw or be poisoned for 1 hour.\nA successful DC 20 Intelligence (Investigation) check allows a character to deduce the trap's presence from al\u00A3erations made to the lock to accommodate the needle. A successful DC 15 Dexterity check using thieves' tools disarms the trap, removing the needle from the lock. Unsuccessfully attempting to pick the lock triggers the trap."
	            },
	            {
	                title: 'Rolling Sphere',
	                selected: false,
	                minimized: false,
	                content: "Mechanical Trap\nWhen 20 or more pounds of pressure are placed on this trap's pressure plate, a hidden trapdoor in the ceiling opens, releasing a 10-foot-diameter rolling sphere of solid stone.\nWith a successful DC 15 Wisdom (Perception) check, a cb.aracter can spot the trapdoor and pressure plate . . A search of the floor accompanied by a successful DC 15 Intelligence (Investigation) check reveals variations in the mortar and stone that betray the pressure plate's presence. The same check made while inspecting the ceiling notes variations in the stonework that reveal the trapdoor. Wedging an iron spike or other object under the pressure plate prevents the trap from activating.\nActivation of the sphere requires all creatures present to roll initiative. The sphere rolls initiative with a +8 bonus. On its turn, it moves 60 feet in a straight line. The sphere can move through creatures' spaces, and creatures can move through its space, treating it as difficult terrain. Whenever the sphere enters a creature's space or a creature enters its space while it's rolling, that creature must succeed on a DC 15 Dexterity saving throw or take 55 (10d10) bludgeoning damage and be knocked prone.\nThe sphere stops when it hits a wall or similar barrier. It can't go around corners, but smart dungeon builders incorporate gentle, curving turns into nearby passages that allow the sphere to keep moving.\nAs an action, a creature within 5 feet of the sphere can attempt to slow it down with a DC 20 Strength check. On a successful check, the sphere's speed is reduced by 15 feet. If the sphere's speed drops to 0, it stops moving and is no longer a threat."
	            },
	            {
	                title: 'Sphere of Annihilation',
	                selected: false,
	                minimized: false,
	                content: "Magical Trap\nMagical, impenetrable darkness fills the gaping mouth of a stone face carved into a wall. The mouth is 2 feet in diameter and roughly circular. No sound issues from it, no light can illuminate the inside of it, and any matter that enters it is instantly obliterated.\nA successful DC 20 Intelligence (Arcana) check reveals that the mouth contains a sphere of annihilation that can't be controlled or moved. It is otherwise identical to a normal sphere of annihilation, as described in chapter 7, \"Treasure.\"\nSome versions of the trap include an enchantment placed on the stone face, such that specified creatures feel an overwhelming urge to approach it and crawl inside its mouth. This effect is otherwise like the sympathy aspect of the antipathy/sympathy spell. A successful dispel magic (DC 18) removes this enchantment."
	            }
	        ]
	    }
	];


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<span ngbDropdown>\n  <button ngbDropdownToggle class=\"btn btn-sm btn-secondary\">\n    <span class=\"fa fa-lg fa-plus\"></span>\n  </button>\n  <ul ngbDropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let fileType of fileTypeNames\" role=\"menuitem\">\n      <a href=\"#\" class=\"dropdown-item\"\n         (click)=\"emitSelection(fileType)\">\n         {{fileType}}\n      </a>\n    </li>\n  </ul>\n</span>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'dmscreen-app',
	        template: __webpack_require__(41),
	        styles: [__webpack_require__(42)],
	        encapsulation: core_1.ViewEncapsulation.None
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid full-height\">\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n      <files-panel></files-panel>\n    </div>\n    <div class=\"col-lg-5\">\n      <main-panel></main-panel>\n    </div>\n    <div class=\"col-lg-5\">\n      <reference-panel></reference-panel>\n    </div>\n  </div>\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(43);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  overflow: hidden;\n}\n\n.full-height {\n  height: 100%;\n}\n\na {\n  color: black;\n}\n\ntextarea {\n  resize: none;\n}\n\n.col-lg-2, .col-lg-5 {\n  padding: 0px;\n}", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var EditorComponent = (function () {
	    function EditorComponent() {
	        this.contentChange = new core_1.EventEmitter();
	    }
	    EditorComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        tinymce.init({
	            selector: '#editor',
	            plugins: ['table'],
	            height: 600,
	            menubar: false,
	            toolbar: 'bold italic underline bullist numlist table',
	            statusbar: false,
	            resize: false,
	            setup: function (editor) {
	                _this.editor = editor;
	                _this.editor.on('keyup', function () {
	                    var content = _this.editor.getContent();
	                    _this.contentChange.emit(content);
	                });
	                _this.editor.on('init', function () {
	                    _this.editor.setContent(_this.content);
	                });
	            }
	        });
	    };
	    EditorComponent.prototype.ngOnChanges = function () {
	        if (!this.editor) {
	            return;
	        }
	        this.editor.setContent(this.content);
	    };
	    EditorComponent.prototype.ngOnDestroy = function () {
	        tinymce.remove(this.editor);
	    };
	    return EditorComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], EditorComponent.prototype, "content", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], EditorComponent.prototype, "contentChange", void 0);
	EditorComponent = __decorate([
	    core_1.Component({
	        selector: 'editor',
	        template: __webpack_require__(46),
	    }),
	    __metadata("design:paramtypes", [])
	], EditorComponent);
	exports.EditorComponent = EditorComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<textarea id=\"editor\"></textarea>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(28);
	var file_service_1 = __webpack_require__(37);
	var remove_file_component_1 = __webpack_require__(48);
	var FileHierarchyComponent = (function () {
	    function FileHierarchyComponent(files, modal) {
	        this.files = files;
	        this.modal = modal;
	    }
	    Object.defineProperty(FileHierarchyComponent.prototype, "fileTree", {
	        get: function () {
	            return this.files.fileTree;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FileHierarchyComponent.prototype.ngOnInit = function () { };
	    FileHierarchyComponent.prototype.toggleFolder = function (index) {
	        this.files.toggleFolder(index);
	    };
	    FileHierarchyComponent.prototype.selectFile = function (parentIndex, index) {
	        this.files.toggleFile(parentIndex, index);
	    };
	    FileHierarchyComponent.prototype.removeFile = function (parentIndex, index, event) {
	        var _this = this;
	        event.stopPropagation();
	        var modalRef = this.modal.open(remove_file_component_1.RemoveFileComponent);
	        var doc = this.files.getFile(parentIndex, index);
	        modalRef.componentInstance.title = doc.title;
	        modalRef.result.then(function (result) {
	            if (result) {
	                _this.files.removeFile(parentIndex, index);
	            }
	        });
	    };
	    return FileHierarchyComponent;
	}());
	FileHierarchyComponent = __decorate([
	    core_1.Component({
	        selector: 'file-hierarchy',
	        template: __webpack_require__(50),
	        styles: [__webpack_require__(51)],
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object, typeof (_b = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _b || Object])
	], FileHierarchyComponent);
	exports.FileHierarchyComponent = FileHierarchyComponent;
	var _a, _b;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(28);
	var RemoveFileComponent = (function () {
	    function RemoveFileComponent(modal) {
	        this.modal = modal;
	    }
	    RemoveFileComponent.prototype.cancel = function () {
	        this.modal.close(false);
	    };
	    RemoveFileComponent.prototype.confirm = function () {
	        this.modal.close(true);
	    };
	    return RemoveFileComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], RemoveFileComponent.prototype, "title", void 0);
	RemoveFileComponent = __decorate([
	    core_1.Component({
	        selector: 'remove-file',
	        template: __webpack_require__(49)
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== "undefined" && ng_bootstrap_1.NgbActiveModal) === "function" && _a || Object])
	], RemoveFileComponent);
	exports.RemoveFileComponent = RemoveFileComponent;
	var _a;


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-body\">\n  Are you sure you want to delete '{{title}}'?\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\">Delete</button>\n</div>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let folder of fileTree; let i=index\">\n  <div class=\"folder\" (click)=\"toggleFolder(i)\">\n    <span class=\"fa\" \n          [class.fa-folder-o]=\"!folder.expanded\"\n          [class.fa-folder-open-o]=\"folder.expanded\"></span>\n    {{folder.name}}\n  </div>\n  <template [ngIf]=\"folder.expanded\"> \n    <div *ngFor=\"let file of folder.children; let j=index\"\n          (click)=\"selectFile(i, j)\"\n          [class.selected]=\"file.selected\"\n          class=\"document\">\n      <span class=\"fa fa-file-text-o\"></span>\n      {{file.title}}\n      <span class=\"hover-show fa fa-trash-o\" (click)=\"removeFile(i, j, $event)\"></span>\n    </div>\n  </template>\n</div>\n<template ngbModalContainer></template>"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(52);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".selected {\n  background-color: #0275d8;\n  color: white;\n  border-radius: 4px;\n}\n\n.folder, .document {\n  padding-right: 4px;\n}\n\n.folder {\n  padding-left: 4px;\n}\n\n.folder:hover {\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.document {\n  padding-left: 1.25em;\n}\n\n.hover-show {\n  display: none;\n}\n\n.document:hover .hover-show {\n  display: inline;\n}", ""]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var FilesPanelComponent = (function () {
	    function FilesPanelComponent(files) {
	        this.files = files;
	    }
	    FilesPanelComponent.prototype.addFile = function (fileType) {
	        this.files.addFile(fileType);
	    };
	    return FilesPanelComponent;
	}());
	FilesPanelComponent = __decorate([
	    core_1.Component({
	        selector: 'files-panel',
	        template: __webpack_require__(54)
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object])
	], FilesPanelComponent);
	exports.FilesPanelComponent = FilesPanelComponent;
	var _a;


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<panel>\n  <div panel-title>\n    Files\n    <add-file class=\"pull-right\"\n              (fileTypeSelected)=\"addFile($event)\"></add-file>\n  </div>\n  <div panel-content>\n    <file-hierarchy></file-hierarchy>\n  </div>\n</panel>"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var MainPanelComponent = (function () {
	    function MainPanelComponent(files) {
	        this.files = files;
	    }
	    Object.defineProperty(MainPanelComponent.prototype, "isFileSelected", {
	        get: function () {
	            return this.files.selectedFile !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MainPanelComponent.prototype, "selectedFile", {
	        get: function () {
	            return this.files.selectedFile;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MainPanelComponent;
	}());
	MainPanelComponent = __decorate([
	    core_1.Component({
	        selector: 'main-panel',
	        template: __webpack_require__(56),
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object])
	], MainPanelComponent);
	exports.MainPanelComponent = MainPanelComponent;
	var _a;


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<panel>\n  <div panel-title>\n    <title-editor *ngIf=\"isFileSelected\" [document]=\"selectedFile\"></title-editor>\n    <span *ngIf=\"!isFileSelected\">No File Selected</span>\n  </div>\n  <div panel-content>\n    <editor *ngIf=\"isFileSelected\" [(content)]=\"selectedFile.content\"></editor>\n  </div>\n</panel>"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var PanelComponent = (function () {
	    function PanelComponent() {
	    }
	    PanelComponent.prototype.ngOnInit = function () { };
	    return PanelComponent;
	}());
	PanelComponent = __decorate([
	    core_1.Component({
	        selector: 'panel',
	        template: __webpack_require__(58),
	        styles: [__webpack_require__(59)],
	    }),
	    __metadata("design:paramtypes", [])
	], PanelComponent);
	exports.PanelComponent = PanelComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card full-height\">\n  <div class=\"card-header\">\n    <ng-content select=\"[panel-title]\"></ng-content>\n  </div>\n  <div class=\"card-block scrollable\">\n    <ng-content select=\"[panel-content]\"></ng-content>\n  </div>\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(60);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollable {\n  max-height: 93%;\n  overflow-y: scroll;\n}\n\n.card {\n  border-radius: 0px;\n}\n\n.card-header {\n  height: 51px;\n}\n\n.card-block {\n  padding: 0.5rem;\n}", ""]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var ReferenceService = (function () {
	    function ReferenceService(files) {
	        this.files = files;
	        this.records = [];
	    }
	    Object.defineProperty(ReferenceService.prototype, "documents", {
	        get: function () {
	            var docs = [];
	            for (var _i = 0, _a = this.records; _i < _a.length; _i++) {
	                var record = _a[_i];
	                var doc = this.files.getFile(record.parentIndex, record.index);
	                if (doc) {
	                    docs.push(doc);
	                }
	            }
	            return docs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReferenceService.prototype.addReference = function (file) {
	        var index = this.records.findIndex(function (value) { return value.equals(file); });
	        if (index > -1) {
	            this.records.splice(index, 1);
	        }
	        this.records.splice(0, 0, file);
	    };
	    ReferenceService.prototype.removeReference = function (index) {
	        this.records.splice(index, 1);
	    };
	    return ReferenceService;
	}());
	ReferenceService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object])
	], ReferenceService);
	exports.ReferenceService = ReferenceService;
	var _a;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var ReferenceDetailComponent = (function () {
	    function ReferenceDetailComponent() {
	        this.remove = new core_1.EventEmitter();
	    }
	    ReferenceDetailComponent.prototype.toggleMinimized = function () {
	        this.document.minimized = !this.document.minimized;
	    };
	    ReferenceDetailComponent.prototype.removeReference = function () {
	        this.document.minimized = false;
	        this.remove.emit();
	    };
	    return ReferenceDetailComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", typeof (_a = typeof file_service_1.Document !== "undefined" && file_service_1.Document) === "function" && _a || Object)
	], ReferenceDetailComponent.prototype, "document", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], ReferenceDetailComponent.prototype, "remove", void 0);
	ReferenceDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'reference-detail',
	        template: __webpack_require__(63),
	        styles: [__webpack_require__(64)],
	    }),
	    __metadata("design:paramtypes", [])
	], ReferenceDetailComponent);
	exports.ReferenceDetailComponent = ReferenceDetailComponent;
	var _a;


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{document.title}}\n    <div class=\"btn-group pull-right\" role=\"group\">\n      <button class=\"btn btn-sm btn-secondary\"\n              (click)=\"toggleMinimized()\">\n        <span class=\"fa fa-lg\"\n              [class.fa-minus]=\"!document.minimized\"\n              [class.fa-plus]=\"document.minimized\"></span>\n      </button>\n      <button class=\"btn btn-sm btn-danger\"\n              (click)=\"removeReference()\">\n        <span class=\"fa fa-lg fa-times\"></span>\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"!document.minimized\" class=\"card-block\">\n    <span class=\"content\" [innerHTML]=\"document.content\"></span>\n    <!--<span class=\"content\">{{document.content}}</span>-->\n  </div>\n</div>"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(65);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".content {\n  overflow-wrap: break-word;\n}", ""]);
	
	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var reference_service_1 = __webpack_require__(61);
	var ReferenceListComponent = (function () {
	    function ReferenceListComponent(references) {
	        this.references = references;
	    }
	    Object.defineProperty(ReferenceListComponent.prototype, "documents", {
	        get: function () {
	            return this.references.documents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReferenceListComponent.prototype.removeReference = function (index) {
	        this.references.removeReference(index);
	    };
	    return ReferenceListComponent;
	}());
	ReferenceListComponent = __decorate([
	    core_1.Component({
	        selector: 'reference-list',
	        template: __webpack_require__(67)
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof reference_service_1.ReferenceService !== "undefined" && reference_service_1.ReferenceService) === "function" && _a || Object])
	], ReferenceListComponent);
	exports.ReferenceListComponent = ReferenceListComponent;
	var _a;


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<reference-detail *ngFor=\"let document of documents; let i = index\" \n                  [document]=\"document\"\n                  (remove)=\"removeReference(i)\"></reference-detail>"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var reference_service_1 = __webpack_require__(61);
	var ReferencePanelComponent = (function () {
	    function ReferencePanelComponent(references) {
	        this.references = references;
	    }
	    ReferencePanelComponent.prototype.addReference = function (file) {
	        this.references.addReference(file);
	    };
	    return ReferencePanelComponent;
	}());
	ReferencePanelComponent = __decorate([
	    core_1.Component({
	        selector: 'reference-panel',
	        template: __webpack_require__(69),
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof reference_service_1.ReferenceService !== "undefined" && reference_service_1.ReferenceService) === "function" && _a || Object])
	], ReferencePanelComponent);
	exports.ReferencePanelComponent = ReferencePanelComponent;
	var _a;


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<panel>\n  <div panel-title>\n    <reference-search (referenceSelected)=\"addReference($event)\"></reference-search>\n  </div>\n  <div panel-content>\n    <reference-list></reference-list>\n  </div>\n</panel>"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var ReferenceSearchComponent = (function () {
	    function ReferenceSearchComponent(files) {
	        var _this = this;
	        this.files = files;
	        this.referenceSelected = new core_1.EventEmitter();
	        this.search = function (text$) {
	            return text$
	                .distinctUntilChanged()
	                .map(function (term) { return term.length < 1 ? []
	                : _this.files.allFiles.filter(function (v) { return new RegExp(term, 'gi').test(v.title); }).splice(0, 10); });
	        };
	        this.formatter = function (file) { return file.title; };
	    }
	    ReferenceSearchComponent.prototype.itemSelected = function (event) {
	        this.referenceSelected.emit(event.item);
	    };
	    return ReferenceSearchComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], ReferenceSearchComponent.prototype, "referenceSelected", void 0);
	ReferenceSearchComponent = __decorate([
	    core_1.Component({
	        selector: 'reference-search',
	        template: __webpack_require__(71)
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object])
	], ReferenceSearchComponent);
	exports.ReferenceSearchComponent = ReferenceSearchComponent;
	var _a;


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group input-group-sm\">\n  <span class=\"input-group-addon\">\n    <span class=\"fa fa-search\"></span>\n  </span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Find Reference...\"\n          [ngbTypeahead]=\"search\"\n          [inputFormatter]=\"formatter\"\n          [resultTemplate]=\"resultTemplate\"\n          (selectItem)=\"itemSelected($event)\">\n\n  <template #resultTemplate let-r=\"result\" let-t=\"term\">\n    {{ r.title }}\n  </template>\n</div>"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var file_service_1 = __webpack_require__(37);
	var TitleEditorComponent = (function () {
	    function TitleEditorComponent() {
	        this.editing = false;
	    }
	    TitleEditorComponent.prototype.ngAfterViewInit = function () {
	        this.titleEdits.changes.subscribe(function (els) {
	            var el = els.first;
	            if (el !== undefined) {
	                el.nativeElement.focus();
	            }
	        });
	    };
	    TitleEditorComponent.prototype.startEdit = function () {
	        this.editing = true;
	    };
	    TitleEditorComponent.prototype.stopEdit = function () {
	        this.editing = false;
	    };
	    TitleEditorComponent.prototype.titleChanged = function (event) {
	        if (event.key === "Enter" || event.key === "Escape") {
	            this.stopEdit();
	        }
	    };
	    return TitleEditorComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", typeof (_a = typeof file_service_1.Document !== "undefined" && file_service_1.Document) === "function" && _a || Object)
	], TitleEditorComponent.prototype, "document", void 0);
	__decorate([
	    core_1.ViewChildren('titleEdit'),
	    __metadata("design:type", typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object)
	], TitleEditorComponent.prototype, "titleEdits", void 0);
	TitleEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'title-editor',
	        template: __webpack_require__(73)
	    }),
	    __metadata("design:paramtypes", [])
	], TitleEditorComponent);
	exports.TitleEditorComponent = TitleEditorComponent;
	var _a, _b;


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<span *ngIf=\"!editing\">{{document.title}}</span>\n<span *ngIf=\"editing\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"document.title\"\n            (keydown)=\"titleChanged($event)\"\n            (focusout)=\"stopEdit()\" #titleEdit>\n  </div>\n</span>\n<button *ngIf=\"!editing\" class=\"btn btn-sm btn-secondary\" (click)=\"startEdit()\">\n  <span class=\"fa fa-lg fa-pencil\"></span>\n</button>"

/***/ }
]);
//# sourceMappingURL=main.map