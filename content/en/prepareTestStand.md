---
title: Prepare new HDEET for test
draft: true
---
Example files for testing purposes have been add to the HDEET Wiki.

Create a folder on the desktop called Prepare HDEET (any name will do)

Inside this folder create folders called:

* Power Map --- Copy into here a fully functional power map (xml file + supporting files in a folder)
* Test Records --- Copy into here the example GHG Phase 2 Transient Test Procedure (xml file + supporting files in a folder)
* GEM files --- Copy into here and unzip GEM v3.4 Cycles Files created for HDEET 4 Eng Simulator v3-4.zip
* Cycles --- Copy into here and unzip GHG Fuel Shortened Consumption Cycles with Results.zip
* Engine definition --- Copy into here NewHoriba_SimEng550_opt1_CombineSteadyState.csv

## What you will need

### Files to import stuff into STARS

1. **Import a good power map:**

	a. Navigate to *Prepare HDEET> Power Map*, select the XML file and then click **Open**

	b. Right-click on the **Results folder** and select *Import > STARS Resource*

{{< img "/images/SelectPowerMap.png" "alt text"  >}}

	c. Click **Start Import** when the dialog displays

2.	**Run a Power Map**

	1. Open Engine Mapping tab
	2. Click Run Power Map
	3. In Picker dialog, choose a test specimen (Variable Speed Engine) then click Open
	4. Excel opens, click Open
	5. Engine mapping runs the excel opens again - click Open
	6. When the Power Map Options dialog displays

	{{< img "/images/PowerMapOptions.png" "alt text"  >}}

	* Reduce the time to 1 minute 
	* select Run Motoring Torque Map
	The new Power Map will be in the Results folder
	When prompted, choose to run the analysis


2. **Import the GHG test:**

	a. Right-click on the **Results** folder and select *Import > STARS Resource*

	b. Prepare HDEET> Test Record, select the XML file and then click **Open**

	{{< img "/images/ImportGHGtest.png" "alt text"  >}}

	c. Click **Start Import** when the dialog displays

3. **Import GHG Fuel Shortened Consumption Cycles with Results:**

	a. Right-click on HDEET Project 4.0 and select *Import > STARS Resource*

	b. Prepare HDEET> Cycles, select the XML file and then click **Open**

	{{< img "/images/ImportFuelCycles.png" "alt text"  >}}

## Other files needed

#### GEM Cycles

{{< img "/images/GEM_Cycles.png" "alt text"  >}}

#### GEM Engine Definition Files

{{< img "/images/EngineDefFiles.png" "alt text"  >}}

## GHG Phase 2 tests

1. Import GHG Phase 2 Cycles:

	a. Open **GHG Phase 2** on the **Control Panel**

	b. Click **Import GHG Phase 2 Cycles**

	c. In the picker, select the Power map previously imported Power Map With Monitoring Good

	d. Click **OK** and then wait while the map is read

	e. When prompted, navigate to where the GEM test Cycles are saved (*Prepare HDEET > GEM files*) and select all 9 CSV files

	If you select less than nine, it will complain.

2. ImportCreate a Fuel consumption Cycle and run it:

	{{< note >}} 

	You only need a good Power Map for this. 

	{{< /note >}} 

	a. Open **GHG Phase 2** tab

	b. Click **Create a Fuel consumption Cycle**

	c. In the fuel mapping dialog, select the test record for the power map just imported

	d. Click **Generate**

	e. The new cycle is created in the **Results** folder

3. Run an Emissions test:

	a. Open the **Emissions Test** tab

	b. Click **Run Emissions Test** When the Emissions Test Specification dilaog opens, select options:

	{{< img "/images/SelectEmissionsTestSpec.png" "alt text"  >}}

	d. In the picker dialog, select the fuel cycle just created then click **Open**

	e. When the **Test Options** dialog opens, `deselect *Thermal Stability Check* for now as it is broken`

	A new test record (Modal Steady Stat Fuel Use Test) is created. Open this test record and inspect the **CycleDefinition** data matrix. The modeTime column contains 80 rows of 100 seconds. This is the official test but it would take ages to run. The example GHG Fuel Shortened Consumption Cycles is for testing purposes where this time is reduced from 100 to 8 seconds.

4. Create a Fuel Consumption cycle and run it:

	{{< note >}}  

	You only need a good Power Map for this.  

	{{< /note >}}  

	a. Open **GHG Phase 2** tab

	b. Click **Create a Fuel consumption Cycle**

	c. In the **fuel mapping** dialog, select the test record for the power map just imported

	d. Click Generate

The new cycle is created in the **Results** folder

5. Run a proper Emissions test:

	a. Open the **Emissions** tab

	b. In CREATE TEST FROM: select Cycle Definition

	c. Click **Run Emissions Test**

	d. In the picker dialog, select the fuel cycle just created then click Open

	e. When the **Test Options** dialog opens, `deselect *Thermal Stability Check* for now as it is broken`

	A new test record (Modal Steady Stat Fuel Use Test) is created. Open this test record and inspect the CycleDefinition data matrix. The modeTime column contains 80 rows of 100 seconds. This is the official test but it would take ages to run. The example GHG Fuel Shortened Consumption Cycles is for testing purposes where this time is reduced from 100 to 8 seconds.