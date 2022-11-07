#include "./graph/Graph.h"

int main(int argc, char *argv[])
{
	int num, x, y, peso;
	cin >> num;
	//num = atoi(argv[1]);

	Graph g = Graph(num);

	while (true)
	{
		cin >> x;
		cin >> y;
		cin >> peso;
		if (!x)
			break;
		g.addAresta(x, y, peso);
	}

	int *vet = new int[num + 1];
	g.dijkstra(1, vet);

	for (int i = 1; i <= num; i++)
	{
		cout << i << ";" << vet[i] << endl;
	}

	return 0;
}