def gen_colors(num):
    filepath = "color-swatches\\content\\color-swatches"
    starting_color = 1
    for num in range(num):
        color = hex(starting_color+num*200000).lstrip("0x")
        color = '0'*(6-len(color))+color if len(color) < 6 else color[0:6]

        color_filepath = f"{filepath}\\color_{num+1}.mdx"
        file = open(color_filepath, "w")

        file.writelines("---")
        file.writelines("\n")
        file.writelines(f"fullTitle: Color {num+1}")
        file.writelines("\n")
        file.writelines(f"color: '{color}'")
        file.writelines("\n")
        file.writelines("---")
        file.close()


if __name__ == "__main__":
    number_colors = 100
    gen_colors(number_colors)
