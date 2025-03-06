##1. Алгоритм Дейкстры (Поиск кратчайшего пути в графе)
### Реализуем поиск кратчайшего пути в графе с помощью алгоритма Дейкстры.

import heapq

def dijkstra(graph, start):
    pq = [(0, start)]  # (расстояние, вершина)
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    while pq:
        curr_dist, node = heapq.heappop(pq)

        if curr_dist > distances[node]:
            continue

        for neighbor, weight in graph[node].items():
            distance = curr_dist + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))



#### 2. Динамическое программирование – Разбиение числа на слагаемые
####Рекурсивно находим все способы разбиения числа на сумму других чисел.



def partition(n, max_num=None):
    if max_num is None:
        max_num = n
    if n == 0:
        return [[]]
    if n < 0:
        return []

    partitions = []
    for i in range(min(n, max_num), 0, -1):
        for p in partition(n - i, i):
            partitions.append([i] + p)
    
    return partitions

n = 5
result = partition(n)
for p in result:
    print(p)








####3. Многопоточная обработка данных
####3. Читаем большой файл и считаем частоту встречаемости слов, используя потоки.


import threading
from collections import Counter

def count_words(filename, start, end, counter):
    with open(filename, 'r', encoding='utf-8') as file:
        file.seek(start)
        data = file.read(end - start)
        words = data.split()
        counter.update(words)

filename = 'big_text.txt'
num_threads = 4
file_size = open(filename, 'rb').seek(0, 2)
chunk_size = file_size // num_threads

threads = []
counters = [Counter() for _ in range(num_threads)]

for i in range(num_threads):
    start = i * chunk_size
    end = (i + 1) * chunk_size if i != num_threads - 1 else file_size
    t = threading.Thread(target=count_words, args=(filename, start, end, counters[i]))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

final_counter = sum(counters, Counter())
print(final_counter.most_common(10)) 



###4. Генетический алгоритм для оптимизации
###Используем генетический алгоритм для поиска оптимального решения.
import random

def fitness(solution):
    return sum(solution)  # Пример: максимизируем сумму

def generate_population(size, length):
    return [random.choices(range(10), k=length) for _ in range(size)]

def mutate(solution):
    index = random.randint(0, len(solution) - 1)
    solution[index] = random.randint(0, 9)

def crossover(parent1, parent2):
    point = random.randint(1, len(parent1) - 1)
    return parent1[:point] + parent2[point:], parent2[:point] + parent1[point:]

def genetic_algorithm():
    population = generate_population(100, 10)
    
    for _ in range(1000):  # 1000 поколений
        population.sort(key=fitness, reverse=True)
        new_population = population[:10]  # Выбираем лучших
        while len(new_population) < 100:
            p1, p2 = random.sample(population[:50], 2)  # Отбор из лучших
            child1, child2 = crossover(p1, p2)
            mutate(child1)
            mutate(child2)
            new_population.extend([child1, child2])
        population = new_population
    
    return max(population, key=fitness)

print("Лучшее решение:", genetic_algorithm())




