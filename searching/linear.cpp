#include <print>

int main()
{
	const int numbers[]{-5, 5, 8, 1, -8, 0, 9, 2, 4, 7};
	int searching{8};

	for (int i{}; i < std::ssize(numbers); ++i)
	{
		if (numbers[i] == searching)
		{
			std::print("{}", i);
			return 0;
		}
	}

	std::print("{} Not found", searching);
	return 1;
}