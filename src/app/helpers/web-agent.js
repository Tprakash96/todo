import config from '../constants/config';
const axios = require('axios');

export class WebAgent {
    token = null;
    constructor(baseURL) {
        this.createInstance = this.createInstance.bind(this);
        this.setConfig = this.setConfig.bind(this);
        this.createInstance(baseURL);
    }

    createInstance(baseURL) {
        if (baseURL) {
            this.instance = baseURL ? axios.create({ baseURL }) : axios.create();
            this.instance.defaults.headers['content-type'] = 'application/json';
            this.instance.defaults.responseType = 'json';
        }
    }

    setConfig(userConfig) {
        let config = { ...userConfig };
        if (!config.hasOwnProperty('headers')) config.headers = {};
        return config;
    }

    get(url, data, _config = {}) {
        const config = { params: (data || {}), ...this.setConfig(_config) };
        return this.instance.get(url, config);
    }

    post(url, data, config = {}) {
        return this.instance.post(url, data, this.setConfig(config));
    }

    put(url, data, config = {}) {
        return this.instance.put(url, data, this.setConfig(config));
    }

    delete(url, data, _config = {}) {
        const config = { params: (data || {}), ...this.setConfig(_config) };
        return this.instance.delete(url, config);
    }
}

export const createWebAgent = (baseURL) => {
    return new WebAgent(baseURL);
}

export const defaultAgent = new WebAgent(config.common.APP_API_URL);