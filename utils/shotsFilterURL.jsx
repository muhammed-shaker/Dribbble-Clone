const DISCOVERY_OPTIONS = [

]

const CATEGORIES = [

]

const DEFAULT_DISCOVERY_OPTION = ''
const DEFAULT_CATEGORY = ''


export function createFiltersURL(optionDiscovery, category, tags, color, timeframe){

    let url = '/shots/' + (optionDiscovery || 'popular') + '/' + (category || 'discover')

    if(color || tags || timeframe){
        url += '?'
    } 

    const filters = []

    if(tags){
        filters.push(`tags=${tags}`)
    }

    if(color){
        filters.push(`color=${color}`)
    }

    if(timeframe){
        filters.push(`timeframe=${timeframe}`)
    }

    url += filters.join('&')

    return url
}

function validateDiscoveryOption(){

}

function validateCateogry(){
    
}

