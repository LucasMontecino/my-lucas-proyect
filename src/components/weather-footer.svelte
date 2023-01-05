<script>
    import { getWeatherFrom } from '../routes/services/weather'
    const weatherPromise = getWeatherFrom()
</script>

{#await weatherPromise then weather}
    <footer>
        <div>
            <span>
                {weather.humidity} %
            </span>
            <strong>
                Humidity
            </strong>
        </div>

        <div>
            <span>
                {weather.windSpeed} kph
            </span>
            <strong>
                Wind Speed
            </strong>
        </div>

        <div>
            <span>
                {weather.feelsLike}°
            </span>
            <strong>
                Feels Like
            </strong>
        </div>
    </footer>
{/await}

<style>
    footer{
        border: 2px solid #000;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }

    span{
        display: block;
        color: #000
    }

    strong{
        color: #444;
        font-weight: 500;
    }
</style>