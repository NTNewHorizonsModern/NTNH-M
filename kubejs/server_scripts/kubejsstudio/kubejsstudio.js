// kubejsstudio custom: kubejsstudio:combination/charcoal
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/combination/charcoal',
      {
        "type": "hbm:combination",
        "input": {"ingredient":"minecraft:charcoal"},
        "item_output": "minecraft:coal",
        "fluid_output": {"type":"hbm:gas_coker","amount":25},
        "order": 53
      }
    )
})
// kubejsstudio custom: hbm:combination/bedrock_ore_primary_rare
ServerEvents.generateData('after_mods', event => {
    event.json(
      'hbm:recipe/combination/bedrock_ore_primary_rare',
      {
        "type": "hbm:combination",
        "input": {"ingredient":"hbm:bedrock_ore_primary_rare"},
        "item_output": "hbm:bedrock_ore_primary_roasted_rare",
        "fluid_output": {"type":"hbm:vitriol","amount":50},
        "order": 34
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_eng_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_eng_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"minecraft:diamond"},
        "output": "ae2:printed_engineering_processor",
        "order": 48
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_silicon
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_silicon',
      {
        "type": "hbm:press",
        "stamp": "flat",
        "input": {"ingredient":"hbm:circuit_silicon"},
        "output": "ae2:printed_silicon",
        "order": 51
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_cal_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_cal_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"ae2:certus_quartz_crystal"},
        "output": "ae2:printed_calculation_processor",
        "order": 50
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_log_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_log_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"minecraft:gold_ingot"},
        "output": "ae2:printed_logic_processor",
        "order": 49
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/eng_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/eng_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:engineering_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_engineering_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 27
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/log_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/log_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:logic_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_logic_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 28
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/cal_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/cal_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:calculation_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_calculation_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 29
      }
    )
})
// kubejsstudio custom: kubejsstudio:chemical_plant/fluix_crystals
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/chemical_plant/fluix_crystals',
      {
        "type": "hbm:chemical_plant",
        "name": "chem.fluix_crystals",
        "input_items": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"minecraft:quartz","count":4},
          {"ingredient":"ae2:charged_certus_quartz_crystal","count":4}
        ],
        "input_fluids": [{"type":"minecraft:water","amount":100}],
        "output_items": [{"id":"ae2:fluix_crystal","count":8}],
        "duration": 100,
        "power": 100,
        "order": 90
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/conc_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/conc_processor',
      {
        "type": "hbm:soldering",
        "output": "extendedae:concurrent_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"extendedae:concurrent_processor_print","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 30
      }
    )
})
// kubejsstudio custom: kubejsstudio:printed_conc_proc
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/press/printed_conc_proc', {"type":"hbm:press","output":{"item":"extendedae:concurrent_processor_print"},"input":{"item":"extendedae:entro_crystal"},"stamp":"circuit"})
})
// kubejsstudio custom: kubejsstudio:press/printed_conc_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_conc_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"extendedae:entro_crystal"},
        "output": "extendedae:concurrent_processor_print",
        "order": 50
      }
    )
})
// kubejsstudio custom: hbm:assembly_machine/adapter
ServerEvents.generateData('after_mods', event => {
    event.json(
      'hbm:recipe/assembly_machine/adapter',
      {
        "type": "hbm:assembly_machine",
        "name": "adapter",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"hbm:part_generic_piston_hydraulic","count":2},
          {"ingredient":"opencomputers:chip1","count":1}
        ],
        "output_items": ["opencomputers:adapter"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:assembly_machine/eassembler
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/assembly_machine/eassembler',
      {
        "type": "hbm:assembly_machine",
        "name": "assembler",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"hbm:machine_autocrafter","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"hbm:part_generic_piston_hydraulic","count":2},
          {"ingredient":"opencomputers:chip2","count":1}
        ],
        "output_items": ["opencomputers:assembler"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:assembly_machine/capacitor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/assembly_machine/capacitor',
      {
        "type": "hbm:assembly_machine",
        "name": "capacitor",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:transistor","count":1},
          {"ingredient":"minecraft:redstone","count":1},
          {"ingredient":"#c:dyes/green","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:capacitor"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:assembly_machine/cs1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/assembly_machine/case1',
      {
        "type": "hbm:assembly_machine",
        "name": "ComputerCase1",
        "input_items": [
          {"ingredient":"hbm:cm_block_steel","count":1},
          {"ingredient":"#c:chests/wooden","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:case1"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:case2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/assembly_machine/case2',
      {
        "type": "hbm:assembly_machine",
        "name": "ComputerCase2",
        "input_items": [
          {"ingredient":"opencomputers:case1","count":1},
          {"material":"steel","shape":"castplate","count":2},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"hbm:circuit_analog","count":1}
        ],
        "output_items": ["opencomputers:case2"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:case3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/case3',
      {
        "type": "hbm:assembly_machine",
        "name": "ComputerCase3",
        "input_items": [
          {"ingredient":"opencomputers:case2","count":1},
          {"material":"steel","shape":"weldedplate","count":6},
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"hbm:circuit_basic","count":1}
        ],
        "output_items": ["opencomputers:case3"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:case4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/case4',
      {
        "type": "hbm:assembly_machine",
        "name": "ComputerCase4",
        "input_items": [
          {"ingredient":"opencomputers:case3","count":1},
          {"material":"steel","shape":"weldedplate","count":6},
          {"material":"tungsten","shape":"castplate","count":2},
          {"ingredient":"opencomputers:chip4","count":1},
          {"ingredient":"hbm:circuit_advanced","count":1}
        ],
        "output_items": ["opencomputers:case4"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:charger
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/charger',
      {
        "type": "hbm:assembly_machine",
        "name": "Charger",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:capacitor","count":2},
          {"ingredient":"opencomputers:chip2","count":1}
        ],
        "output_items": ["opencomputers:charger"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:disassembler
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/disassembler',
      {
        "type": "hbm:assembly_machine",
        "name": "Disassembler",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"hbm:part_generic_piston_hydraulic","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:cu","count":1}
        ],
        "output_items": ["opencomputers:disassembler"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: kubejsstudio:assembly_machine/case1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/assembly_machine/case1',
      {
        "type": "hbm:assembly_machine",
        "name": "ComputerCase1",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"#c:chests/wooden","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:case1"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:diskdrive
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/diskdrive',
      {
        "type": "hbm:assembly_machine",
        "name": "DiskDrive",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"hbm:part_generic_piston_hydraulic","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:diskdrive"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:geolyzer
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/geolyzer',
      {
        "type": "hbm:assembly_machine",
        "name": "Geolyzer",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"hbm:survey_scanner","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":2},
          {"ingredient":"hbm:reinforced_glass","count":1}
        ],
        "output_items": ["opencomputers:geolyzer"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:hologram1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hologram1',
      {
        "type": "hbm:assembly_machine",
        "name": "Hologram1",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"minecraft:glowstone_dust","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":2},
          {"ingredient":"hbm:reinforced_glass","count":1}
        ],
        "output_items": ["opencomputers:hologram1"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:hologram2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hologram2',
      {
        "type": "hbm:assembly_machine",
        "name": "hologram2",
        "input_items": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:hologram1","count":1},
          {"ingredient":"hbm:circuit_basic","count":1}
        ],
        "output_items": ["opencomputers:hologram2"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:hologram3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hologram3',
      {
        "type": "hbm:assembly_machine",
        "name": "Hologram3",
        "input_items": [
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:hologram2","count":1},
          {"ingredient":"hbm:circuit_advanced","count":2}
        ],
        "output_items": ["opencomputers:hologram3"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:motionsensor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/motionsensor',
      {
        "type": "hbm:assembly_machine",
        "name": "MotionSensor",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"minecraft:daylight_detector","count":6},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:motionsensor"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:powerconverter
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/powerconverter',
      {
        "type": "hbm:assembly_machine",
        "name": "PowerConv",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cable","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:powerconverter"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:powerdistributor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/powerdistributor',
      {
        "type": "hbm:assembly_machine",
        "name": "PowerDist",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cable","count":2},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:powerdistributor"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:raid
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/raid',
      {
        "type": "hbm:assembly_machine",
        "name": "Raid",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:diskdrive","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:ram2","count":2},
          {"ingredient":"opencomputers:cpu2","count":1}
        ],
        "output_items": ["opencomputers:raid"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:redstone
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/redstone',
      {
        "type": "hbm:assembly_machine",
        "name": "RedstoneIO",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:hdd2","count":1}
        ],
        "output_items": ["opencomputers:redstone"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:relay
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/relay',
      {
        "type": "hbm:assembly_machine",
        "name": "Relay",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cable","count":6},
          {"ingredient":"opencomputers:lancard","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:relay"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:rack
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/rack',
      {
        "type": "hbm:assembly_machine",
        "name": "Rack",
        "input_items": [
          {"ingredient":"opencomputers:transistor","count":1},
          {"ingredient":"opencomputers:relay","count":1},
          {"ingredient":"opencomputers:powerdistributor","count":1}
        ],
        "output_items": ["opencomputers:rack"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:screen1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/screen1',
      {
        "type": "hbm:assembly_machine",
        "name": "Screen1",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"#c:glass_blocks","count":1},
          {"ingredient":"#c:ingots/steel","count":7}
        ],
        "output_items": ["opencomputers:screen1"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:screen2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/screen2',
      {
        "type": "hbm:assembly_machine",
        "name": "Screen2",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"#c:glass_blocks","count":1},
          {"ingredient":"#c:ingots/steel","count":7}
        ],
        "output_items": ["opencomputers:screen2"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:screen3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/screen3',
      {
        "type": "hbm:assembly_machine",
        "name": "Screen3",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"#c:glass_blocks","count":1},
          {"ingredient":"#c:ingots/steel","count":7}
        ],
        "output_items": ["opencomputers:screen3"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:screen4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/screen4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:assembly_machine",
        "name": "Screen4",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:chip4","count":1},
          {"ingredient":"#c:glass_blocks","count":1},
          {"ingredient":"#c:ingots/steel","count":7}
        ],
        "output_items": ["opencomputers:screen4"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:printer
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/printer',
      {
        "type": "hbm:assembly_machine",
        "name": "3DPrinter",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cable","count":6},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:printer"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:waypoint
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/waypoint',
      {
        "type": "hbm:assembly_machine",
        "name": "Waypoint",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:transistor","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:waypoint"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:netsplitter
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/netsplitter',
      {
        "type": "hbm:assembly_machine",
        "name": "NetSplitter",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"opencomputers:cable","count":6},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"minecraft:redstone","count":1},
          {"ingredient": "hbm:circuit_pcb","count":1}
        ],
        "output_items": ["opencomputers:netsplitter"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:transposer
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/transposer',
      {
        "type": "hbm:assembly_machine",
        "name": "Transposer",
        "input_items": [
          {"ingredient":"ntnhm:case","count":1},
          {"ingredient":"hbm:crate_steel","count":1},
          {"ingredient":"hbm:part_generic_piston_hydraulic","count":2}
        ],
        "output_items": ["opencomputers:transposer"],
        "duration": 200,
        "power": 100
      }
    )
})
// kubejsstudio custom: opencomputers:alu
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/alu',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:alu",
        "duration": 150,
        "consumption": 300,
        "toppings": [{"ingredient":"opencomputers:transistor","count":3},
                     {"ingredient":"opencomputers:chip1","count":1},
                     {"ingredient":"ae2:calculation_processor","count":1}
        ]
      }
    )
})
// kubejsstudio custom: opencomputers:analyzer
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/analyzer',
      {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [" # "," A "," C "],
        "key": {
          "#": {"item":"minecraft:redstone_torch"},
          "A": {"item":"opencomputers:transistor"},
          "C": {"item":"hbm:circuit_pcb"}
        },
        "result": {"id":"opencomputers:analyzer","count":1}
      }
    )
})
// kubejsstudio custom: opencomputers:apu1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/apu1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:apu1",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:graphicscard2","count":1},
          {"ingredient":"opencomputers:componentbus2","count":1},
          {"ingredient":"opencomputers:cpu2","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:apu2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/apu2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:apu2",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:graphicscard3","count":1},
          {"ingredient":"opencomputers:componentbus3","count":1},
          {"ingredient":"opencomputers:cpu3","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:apu3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/apu3',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:apu3",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:graphicscard4","count":1},
          {"ingredient":"opencomputers:componentbus4","count":1},
          {"ingredient":"opencomputers:cpu4","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:arrowkeys
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/arrowkeys',
      {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [" # ","###"," A "],
        "key": {"#":{"item":"minecraft:stone_button"},
                "A":{"item":"hbm:circuit_pcb"}},
        "result": {"id":"opencomputers:arrowkeys","count":1}
      }
    )
})
// kubejsstudio custom: opencomputers:cpu1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/cpu1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:cpu1",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:cpu2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/cpu2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:cpu2",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:cpu3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/cpu3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:cpu3",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:cpu4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/cpu4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:cpu4",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:chip4","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:card
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/card',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:card",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"hbm:ingot_polymer","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"minecraft:redstone","count":4}]
      }
    )
})
// kubejsstudio custom: opencomputers:componentbus1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/componentbus1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:componentbus1",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:componentbus2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/componentbus2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:componentbus2",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:componentbus3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/componentbus3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:componentbus3",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:componentbus4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/componentbus4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:componentbus4",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip4","count":1},
          {"ingredient":"opencomputers:cu","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:cu
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/cu',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:cu",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:transistor","count":3},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"ae2:logic_processor","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:datacard1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/datacard1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:datacard1",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:cpu1","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:datacard2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/datacard2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:datacard2",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:cpu2","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:datacard3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/datacard3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:datacard3",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:cpu3","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:disk
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/disk',
      {
        "type": "hbm:press",
        "stamp": "flat",
        "input": {"ingredient":"hbm:plate_iron"},
        "output": "opencomputers:disk"
      }
    )
})
// kubejsstudio custom: opencomputers:dronecase1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/dronecase1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:dronecase1",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:microcontrollercase1","count":1},
          {"ingredient":"hbm:drone_patrol","count":1},
          {"ingredient":"opencomputers:componentbus1","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:dronecase2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/dronecase2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:dronecase2",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:microcontrollercase2","count":1},
          {"ingredient":"hbm:drone_patrol","count":1},
          {"ingredient":"opencomputers:componentbus1","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:dronecase3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/dronecase3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:dronecase3",
        "duration": 200,
        "consumption": 500,
        "toppings": [
          {"ingredient":"opencomputers:microcontrollercase3","count":1},
          {"ingredient":"hbm:drone_patrol","count":1},
          {"ingredient":"opencomputers:componentbus3","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:graphicscard1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/graphicscard1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:graphicscard1",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram1","count":1},
          {"ingredient":"opencomputers:card","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:graphicscard2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/graphicscard2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:graphicscard2",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram3","count":1},
          {"ingredient":"opencomputers:card","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:graphicscard3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/graphicscard3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:graphicscard3",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram5","count":1},
          {"ingredient":"opencomputers:card","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:graphicscard4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/graphicscard4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "minecraft:crafting_shaped",
        "type": "hbm:soldering",
        "output": "opencomputers:graphicscard4",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram7","count":1},
          {"ingredient":"opencomputers:card","count":1},
          {"ingredient":"opencomputers:alu","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:hdd1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hdd1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:hdd1",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"opencomputers:disk","count":3},
          {"ingredient":"opencomputers:chip1","count":2}]
      }
    )
})
// kubejsstudio custom: opencomputers:hdd2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hdd2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:hdd2",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"opencomputers:disk","count":3},
          {"ingredient":"opencomputers:chip2","count":2}]
      }
    )
})
// kubejsstudio custom: opencomputers:hdd4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hdd4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:hdd4",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"opencomputers:disk","count":3},
          {"ingredient":"opencomputers:chip4","count":2}]
      }
    )
})
// kubejsstudio custom: opencomputers:hdd3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/hdd3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:hdd3",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"opencomputers:disk","count":3},
          {"ingredient":"opencomputers:chip3","count":2}]
      }
    )
})
// kubejsstudio custom: opencomputers:internetcard
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/internetcard',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:internetcard",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:card","count":1},
          {"ingredient":"minecraft:ender_pearl","count":1},
          {"ingredient":"opencomputers:chip2","count":1}
          ]
      }
    )
})
// kubejsstudio custom: opencomputers:linkedcard
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/linkedcard',
      {
        "type": "hbm:soldering",
        "output": {"id":"opencomputers:linkedcard","count":2},
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"opencomputers:lancard","count":2},
          {"ingredient":"#c:ender_pearls","count":2},
          {"ingredient":"opencomputers:chip3","count":2}
          ]
      }
    )
})
// kubejsstudio custom: opencomputers:ram1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram1",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip1","count":2}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram2",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:chip2","count":1}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram3",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip2","count":2}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram4',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram4",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:chip3","count":1}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram5
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram5',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram5",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip3","count":2}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram6
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram6',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram6",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip3","count":2},
          {"ingredient":"opencomputers:chip2","count":1}
          ],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram7
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram7',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:ram7",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip4","count":2}],
        "pcb": [{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:ram8
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/ram8',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:ram8",
        "duration": 100,
        "consumption": 150,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip4","count":2},
          {"ingredient":"opencomputers:chip3","count":1}
        ],
        "pcb": [
          {"ingredient":"hbm:circuit_pcb","count":1},
          {"ingredient":"hbm:ingot_polymer","count":1}
        ]
      }
    )
})
// kubejsstudio custom: opencomputers:ram8_2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:soldering/ram8_2',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:ram8",
        "duration": 100,
        "consumption": 150,
        "fluid": {"type":"hbm:peroxide","amount":100},
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip4","count":2},
          {"ingredient":"opencomputers:chip3","count":1}],
        "pcb": {"ingredient":"hbm:circuit_pcb","count":1}
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/ram8_2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/ram8_2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:ram8",
        "duration": 100,
        "consumption": 150,
        "fluid": {"type":"hbm:sulfuric_acid","amount":100},
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip4","count":2},
          {"ingredient":"opencomputers:chip3","count":1}],
        "pcb": {"ingredient":"hbm:circuit_pcb","count":1}
      }
    )
})
// kubejsstudio custom: opencomputers:chip1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/chip1',
      {
        "type": "hbm:soldering",
        "output": {"id":"opencomputers:chip1","count":8},
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"hbm:circuit_silicon","count":1},
          {"ingredient":"opencomputers:transistor","count":4}
        ],
        "duration": 120,
        "consumption": 200
      }
    )
})
// kubejsstudio custom: opencomputers:chip2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/chip2',
      {
        "type": "hbm:soldering",
        "output": {"id":"opencomputers:chip2","count":4},
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip1","count":8},
          {"ingredient":"opencomputers:transistor","count":4}
          ]
      }
    )
})
// kubejsstudio custom: opencomputers:chip3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/chip3',
      {
        "type": "hbm:soldering",
        "output": {"id":"opencomputers:chip3","count":2},
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip2","count":4},
          {"ingredient":"opencomputers:transistor","count":4}
          ]
      }
    )
})
// kubejsstudio custom: opencomputers:chip4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/chip4',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:chip4",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"opencomputers:chip3","count":2},
          {"ingredient":"opencomputers:transistor","count":4}]
      }
    )
})
// kubejsstudio custom: opencomputers:microcontrollercase1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/microcontrollercase1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:microcontrollercase1",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:microcontrollercase2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/microcontrollercase2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:microcontrollercase2",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:microcontrollercase3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/microcontrollercase3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:microcontrollercase3",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:lancard
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/lancard',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:lancard",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:cable","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:redstonecard1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/redstonecard1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:redstonecard1",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:redstonecard2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/redstonecard2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:redstonecard2",
        "duration": 120,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone_block","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:server1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/server1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:server1",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram1","count":1},
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:componentbus1","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:server2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/server2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:server2",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram3","count":1},
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:componentbus2","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:server3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/server3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:server3",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram5","count":1},
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:componentbus3","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:server4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/server4',
      {
        "neoforge:conditions": [{"type":"opencomputers:tier4_enabled"}],
        "type": "hbm:soldering",
        "output": "opencomputers:server4",
        "duration": 180,
        "consumption": 400,
        "toppings": [
          {"ingredient":"opencomputers:ram7","count":1},
          {"ingredient":"opencomputers:chip4","count":1},
          {"ingredient":"opencomputers:componentbus4","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:tabletcase1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/tabletcase1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:tabletcase1",
        "duration": 180,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:componentbus1","count":1}],
        "pcb":[{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:tabletcase2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/tabletcase2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:tabletcase2",
        "duration": 180,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:componentbus2","count":1}],
        "pcb":[{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:tabletcase3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/tabletcase3',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:tabletcase3",
        "duration": 180,
        "consumption": 200,
        "toppings": [
          {"ingredient":"opencomputers:chip3","count":1},
          {"ingredient":"opencomputers:componentbus3","count":1}],
        "pcb":[{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:terminal
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/terminal',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:terminal",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:keyboard","count":1},
          {"ingredient":"opencomputers:wlancard2","count":1}
          ]
      }
    )
})
// kubejsstudio custom: opencomputers:terminalserver
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/terminalserver',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:terminalserver",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:wlancard2","count":3}],
        "pcb":[{"ingredient":"hbm:circuit_pcb","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:transistor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/transistor',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:transistor",
        "duration": 180,
        "consumption": 200,
        "toppings": [
          {"ingredient":"minecraft:redstone","count":1},
          {"ingredient":"#c:nuggets/silicon","count":1}],
        "pcb":[{"ingredient":"hbm:ingot_polymer","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:wlancard1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/wlancard1',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:wlancard1",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:chip1","count":1},
          {"ingredient":"opencomputers:lancard","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:wlancard2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/wlancard2',
      {
        "type": "hbm:soldering",
        "output": "opencomputers:wlancard2",
        "duration": 150,
        "consumption": 300,
        "toppings": [
          {"ingredient":"opencomputers:chip2","count":1},
          {"ingredient":"opencomputers:wlancard1","count":1},
          {"ingredient":"opencomputers:card","count":1}]
      }
    )
})
// kubejsstudio custom: opencomputers:backflatscreen1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/backflatscreen1',
      {
        "neoforge:conditions": [{"type":"opencomputers:openscreens_enabled"}],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:screen1"}
        ],
        "result": {"id":"opencomputers:backflatscreen1"}
      }
    )
})
// kubejsstudio custom: opencomputers:backflatscreen2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/backflatscreen2',
      {
        "neoforge:conditions": [{"type":"opencomputers:openscreens_enabled"}],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:screen2"}
        ],
        "result": {"id":"opencomputers:backflatscreen2"}
      }
    )
})
// kubejsstudio custom: opencomputers:backflatscreen3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/backflatscreen3',
      {
        "neoforge:conditions": [{"type":"opencomputers:openscreens_enabled"}],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:screen3"}
        ],
        "result": {"id":"opencomputers:backflatscreen3"}
      }
    )
})
// kubejsstudio custom: opencomputers:backflatscreen4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/backflatscreen4',
      {
        "neoforge:conditions": [
          {"type":"opencomputers:tier4_enabled"},
          {"type":"opencomputers:openscreens_enabled"}
        ],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:screen4"}
        ],
        "result": {"id":"opencomputers:backflatscreen4"}
      }
    )
})
// kubejsstudio custom: opencomputers:frontflatscreen1
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/frontflatscreen1',
      {
        "neoforge:conditions": [{"type":"opencomputers:openscreens_enabled"}],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:backflatscreen1"}
        ],
        "result": {"id":"opencomputers:frontflatscreen1"}
      }
    )
})
// kubejsstudio custom: opencomputers:frontflatscreen2
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/frontflatscreen2',
      {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:backflatscreen2"}
        ],
        "result": {"id":"opencomputers:frontflatscreen2"}
      }
    )
})
// kubejsstudio custom: opencomputers:frontflatscreen3
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/frontflatscreen3',
      {
        "neoforge:conditions": [{"type":"opencomputers:openscreens_enabled"}],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:backflatscreen3"}
        ],
        "result": {"id":"opencomputers:frontflatscreen3"}
      }
    )
})
// kubejsstudio custom: opencomputers:frontflatscreen4
ServerEvents.generateData('after_mods', event => {
    event.json(
      'opencomputers:recipe/frontflatscreen4',
      {
        "neoforge:conditions": [
          {"type":"opencomputers:tier4_enabled"},
          {"type":"opencomputers:openscreens_enabled"}
        ],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {"item":"opencomputers:backflatscreen4"}
        ],
        "result": {"id":"opencomputers:frontflatscreen4"}
      }
    )
})
// kubejsstudio custom: kubejsstudio:screen2
ServerEvents.recipes(event => {
    event.shapeless(
      'opencomputers:screen2',
      ['opencomputers:frontflatscreen2']
    ).id('kubejsstudio:screen2')
})
// kubejsstudio custom: kubejsstudio:screen3
ServerEvents.recipes(event => {
    event.shapeless(
      'opencomputers:screen3',
      ['opencomputers:frontflatscreen3']
    ).id('kubejsstudio:screen3')
})
// kubejsstudio custom: kubejsstudio:screen4
ServerEvents.recipes(event => {
    event.shapeless(
      'opencomputers:screen4',
      ['opencomputers:frontflatscreen4']
    ).id('kubejsstudio:screen4')
})
