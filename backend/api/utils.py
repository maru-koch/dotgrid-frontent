import pandas as pd
import os
import random
import csv


class DummyEnergyData:
    """ Generates random energy consumption data and convert to csv """
    def generate(days: int, devices: int):
        hours = 24
        data = []

        #: number of device
        for device in range(devices):
            device_id = f"device_{device + 1}"
            data.append({device_id: {}})

            #: generate daily energy consumption rate
            for day in range(days):
                day_id = f"day_{day + 1}"
                data[device][device_id][day_id] = []

                #: generate hourly energy consumption rate
                for hour in range(hours):
                    rate = f"{random.random():.2f}"
                    rate_per_hour = (hour, rate)
                    data[device][device_id][day_id].append(rate_per_hour)
        return data

    def to_csv(data):
        with open('josla_data.csv', 'w') as file:
            writer = csv.writer(file)
            writer.writerows(data)
        return writer

    def save(csv_data, filename):
        path = os.path.join(os.environ["HOME"], "Desktop", f"{filename}.csv")
        print(path)
        with open(path, 'w', newline="") as file:
            writer = csv.writer(file)
            writer.writerows(csv_data)
