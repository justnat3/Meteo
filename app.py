class Weather(object):
    def __init__(self, temp, description, windspeed, humidity, alert, townName):
        self.temp = temp
        self.description = description
        self.windspeed = windspeed
        self.humidity = humidity
        self.alert = alert
        self.townName = townName

    def __repr__(self):
        return f"""
        {self.temp}
        {self.description}
        {self.windspeed}
        {self.humidity}
        {self.alert}
        {self.townName}
        """
