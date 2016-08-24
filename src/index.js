import winston from "winston";
import package_info from "../package.json";


export function cli( ){

    // program.command( "command" )
    //     .option( "command-option <path>", "description of the option")
    //     .description( "description of the command")
    //     .action(
    //         function( args ){
    //             //
    //             // Implementaion of the command
    //             //
    //         }
    //      );

    program
        .usage( "<command> [options]" )
        .version( package_info.version )
        .parse( process.argv );

}
