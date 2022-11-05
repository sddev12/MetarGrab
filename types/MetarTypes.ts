export type AirportInfo = {
    icao: string,
    observed: string,
    rawText: string,
    name: string,
    location: string
}

export type BarometerData = {
    hg: number,
    hpa: number,
    kpa: number,
    mb: number
}

export type Cloud = {
    base_feet_agl: number,
    base_meters_agl: number,
    code: string,
    feet: number,
    meters: number
    text: string,
}

export type DewpointData = {
    celsuis: number,
    fahrenheit: number
}

export type ElevationData = {
    feet: number,
    meters: number
}

export type HumidityData = {
    percent: number
}

export type VisibilityData = {
    meters: string,
    miles: string
}

export type WindData = {
    degrees: number,
    speed: number
}