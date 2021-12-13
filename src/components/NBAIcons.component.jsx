import React from 'react';
import * as NBAIcons from 'react-nba-logos';

export default function nbaIcons(teamABR, fontS) {
    let icon = ""
    switch(teamABR){
        case "ATL":
            icon = <NBAIcons.ATL size={fontS}/>
            break
        case "BOS":
            icon = <NBAIcons.BOS size={fontS}/>
            break
        case "BKN":
            icon = <NBAIcons.BKN size={fontS}/>
            break
        case "CHA":
            icon = <NBAIcons.CHA size={fontS}/>
            break
        case "CHI":
            icon = <NBAIcons.CHI size={fontS}/>
            break
        case "CLE":
            icon = <NBAIcons.CLE size={fontS}/>
            break
        case "DAL":
            icon = <NBAIcons.DAL size={fontS}/>
            break
        case "DEN":
            icon = <NBAIcons.DEN size={fontS}/>
            break
        case "DET":
            icon = <NBAIcons.DET size={fontS}/>
            break
        case "GSW":
            icon = <NBAIcons.GSW size={fontS}/>
            break
        case "HOU":
            icon = <NBAIcons.HOU size={fontS}/>
            break
        case "IND":
            icon = <NBAIcons.IND size={fontS}/>
            break
        case "LAC":
            icon = <NBAIcons.LAC size={fontS}/>
            break
        case "LAL":
            icon = <NBAIcons.LAL size={fontS}/>
            break
        case "MEM":
            icon = <NBAIcons.MEM size={fontS}/>
            break
        case "MIA":
            icon = <NBAIcons.MIA size={fontS}/>
            break
        case "MIL":
            icon = <NBAIcons.MIL size={fontS}/>
            break
        case "MIN":
            icon = <NBAIcons.MIN size={fontS}/>
            break
        case "NOP":
            icon = <NBAIcons.NOP size={fontS}/>
            break
        case "NYK":
            icon = <NBAIcons.NYK size={fontS}/>
            break
        case "OKC":
            icon = <NBAIcons.OKC size={fontS}/>
            break
        case "ORL":
            icon = <NBAIcons.ORL size={fontS}/>
            break
        case "PHI":
            icon = <NBAIcons.PHI size={fontS}/>
            break
        case "PHX":
            icon = <NBAIcons.PHX size={fontS}/>
            break
        case "POR":
            icon = <NBAIcons.POR size={fontS}/>
            break
        case "SAC":
            icon = <NBAIcons.SAC size={fontS}/>
            break
        case "SAS":
            icon = <NBAIcons.SAS size={fontS}/>
            break
        case "TOR":
            icon = <NBAIcons.TOR size={fontS}/>
            break
        case "UTA":
            icon = <NBAIcons.UTA size={fontS}/>
            break
        case "WAS":
            icon = <NBAIcons.WAS size={fontS}/>
            break

        default:
            break
    }
    
    return icon
}
