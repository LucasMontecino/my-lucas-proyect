<script>
    import { getWeatherFrom } from './services/weather'
    import WeatherFooter from '../components/weather-footer.svelte';
    import WeatherIcon from '../components/weather.icon.svelte';

    const weatherPromise = getWeatherFrom()
</script>

{#await weatherPromise then weather}
    <section>
        <h1 class="text-3xl font-bold underline">{weather.name}</h1>
        <h2>{weather.temperature}°</h2>
        <h3>{weather.conditionText}</h3>
        <WeatherIcon icon={weather.conditionIcon}/>
    </section>
    <WeatherFooter />
{/await}

<style>
    section {
        padding: 16px;
    }

    h1 {
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }

    h2 {
        font-weight: 300;
        font-size: 120px;
        color: #333;
        text-transform: uppercase;
        padding: 0;
    }

    h3{
        font-weight: 700;
        color: #1B2631;
        transform: rotate(-90deg);
        position: absolute;
        top: 56px;
        right: 12px;
    }
</style>
