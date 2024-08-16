#include <iostream>
#include <print>

int main()
{
	const short size { 1000 };
	double data[size] {};
	short count{};

	while (true)
	{
		double input{};
		std::print("Enter a non-zero value, or 0 to end: ");
		std::cin >> input;

		if (!input) break;

		data[count] = input;
		
		if (++count == size)
		{
			std::println("Sorry, I can only store {} values", size);
			break;
		}
	}

	if (count == 0) 
	{
		std::println("Nothing to sort");
		return 0;
	}

	std::println("Starting sort...");

	short swaps{};
	while (true)
	{
		bool swapped{};
		for (std::size_t i{}; i < count - 1; ++i)
		{
			if (data[i] > data[i + 1])
			{
				const auto temp{ data[i] };
				data[i] = data[i + 1];
				data[i + 1] = temp;
				swaps++;
				swapped = true;
			}
		}
		if (!swapped) break;
	}

	std::println("{} swaps made so that your data will be in ascending sequence:", swaps);
	const unsigned perline{ 10 };
	unsigned n{};
	for (std::size_t i{}; i < count; ++i)
	{
		std::print("{:8.1f}", data[i]);
		if (++n == perline)
		{
			std::println("");
			n = 0;
		}
	}
	std::println("");
}