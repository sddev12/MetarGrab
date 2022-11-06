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
    celsius: number,
    fahrenheit: number
}

export type ElevationData = {
    feet: number,
    meters: number
}

export type HumidityData = {
    percent: number
}

export type Coordinates = number[]

export type Geometry = {
    coordinates: Coordinates,
    type: string
}

export type Station = {
    geometry: Geometry,
    location: string,
    name: string,
    type: string
}

export type VisibilityData = {
    meters: string,
    metars_float: number,
    miles: string,
    miles_float: number
}

export type WindData = {
    degrees: number,
    speed_kph: number,
    speed_kts: number,
    speed_mph: number,
    speed_mps: string
}

export type MetarData = {
    barometer: BarometerData,
    ceiling: Cloud,
    clouds: Cloud[],
    dewpoint: DewpointData,
    elevation: ElevationData,
    flight_category: string,
    humidity: HumidityData,
    icao: string,
    observed: string,
    raw_text: string,
    station: Station,
    temperature: DewpointData,
    visibility: VisibilityData,
    wind: WindData,
    windchill: DewpointData
}