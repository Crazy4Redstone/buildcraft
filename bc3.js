// Build Craft 0.8.1

// Made by Crazy4Redstone

// Blocks:

// Mining Well
Block.defineBlock (500,'Mining Well',[['furnace_bottom',0],['stonecutter_top',0],['furnace_side',0],['furnace_side',0],['furnace_side',0],['furnace_side',0]],50,false,0)
Block.setShape (500,0,0,0,1,1,1)
Block.setDestroyTime (500,0.25)

// Auto Crafting Table
Block.defineBlock (501,'Automatic Crafting Table',[['oak_plank',0],['stonecutter_top',0],['crafting_table_side',0],['crafting_table_side',0],['crafting_table_side',0],['crafting_table_side',0]],50,false,0)
Block.setShape (501,0,0,0,1,1,1)
Block.setDestroyTime (501,0.25)

// Builder
Block.defineBlock (502,'Builder',[['stonecutter_side',0]],50,false,0)
Block.setShape (502,0,0,0,1,1,1)
Block.setDestroyTime (502,0.25)

// Oil - Still
Block.defineBlock (503,'Oil',[['dragon_egg',0]],50,false,0)
Block.setShape (503,0,0,0,1,1,1)
Block.setDestroyTime (503,0.25)

// Wood Pipe
Block.defineBlock (504,'Wood Pipe',[['oak_plank']],5,true,11)
Block.setDestroyTime (504,0.25)

// Cobblestone Pipe
Block.defineBlock (505,'Cobblestone Pipe',[['cobblestone',0]],4,true,11)
Block.setDestroyTime (505,0.25)

// Commands:

// Give
function procCmd (c) {
    var p = c.split(" ")
    var command = p[0]
    switch(command) {
        case 'give': {
            if(p[1] > 0) {
                Entity.setCarriedItem(getPlayerEnt(),p[1],1,p[2])
            }
        }
    }
}	

